import { FC, useState, useCallback, useRef } from "react";
import styles from "./Slider.module.scss";

interface ISliderItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ISliderProps {
  sliders: ISliderItem[];
}

export const Slider: FC<ISliderProps> = ({ sliders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  // Swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  const SWIPE_THRESHOLD = 50;

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setFadeKey((prev) => prev + 1);
      setCurrentIndex(newIndex);

      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const handlePrev = useCallback(() => {
    changeSlide(currentIndex === 0 ? sliders.length - 1 : currentIndex - 1);
  }, [changeSlide, currentIndex, sliders.length]);

  const handleNext = useCallback(() => {
    changeSlide(currentIndex === sliders.length - 1 ? 0 : currentIndex + 1);
  }, [changeSlide, currentIndex, sliders.length]);

  // Touch handlers for swipe support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isSwiping.current = true;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isSwiping.current) return;
    isSwiping.current = false;

    const deltaX = touchStartX.current - touchEndX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  }, [handleNext, handlePrev]);

  // Pointer events for mouse swipe on desktop
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    isSwiping.current = true;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isSwiping.current || e.pointerType === "touch") return;
    touchEndX.current = e.clientX;
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isSwiping.current || e.pointerType === "touch") return;
      isSwiping.current = false;

      const deltaX = touchStartX.current - touchEndX.current;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    },
    [handleNext, handlePrev]
  );

  const getPosition = (index: number): string => {
    let offset = index - currentIndex;
    const half = Math.floor(sliders.length / 2);
    if (offset > half) offset -= sliders.length;
    if (offset < -half) offset += sliders.length;

    if (offset === 0) return "center";
    if (offset === -1) return "left";
    if (offset === 1) return "right";
    if (offset < -1) return "far-left";
    return "far-right";
  };

  const currentSlide = sliders[currentIndex];

  return (
    <div className={styles.slider}>
      <div className={styles.info} key={fadeKey}>
        <h4 className={styles.title}>
          <span className={styles.number}>{currentSlide.id}.</span>{" "}
          <span className={styles.titleText}>{currentSlide.title}</span>
        </h4>
        <p className={styles.description}>{currentSlide.description}</p>
      </div>

      <div
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: "pan-y" }}
      >
        <button
          className={styles.arrowLeft}
          onClick={handlePrev}
          disabled={isAnimating}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.track}>
          {sliders.map((slide, index) => (
            <div
              key={slide.id}
              className={styles.slide}
              data-position={getPosition(index)}
            >
              <img src={slide.image} alt={slide.title} draggable={false} />
            </div>
          ))}
        </div>

        <button
          className={styles.arrowRight}
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.dots}>
        {sliders.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.dotActive : ""
            }`}
            onClick={() => changeSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
