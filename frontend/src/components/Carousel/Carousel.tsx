// BeforeAfterCarousel.tsx
import React, { useState } from 'react';
import styles from './Carousel.module.scss';

interface Slide {
  id: number;
  beforeImage: string;
  afterImage: string;
  title?: string;
}

interface BeforeAfterCarouselProps {
  slides: Slide[];
}

const BeforeAfterCarousel: React.FC<BeforeAfterCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!slides.length) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      
      <div className={styles.carousel}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`} 
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className={styles.slideContainer}>
          <div className={styles.imageWrapper}>
            {/* Номер слайда */}
            <div className={styles.slideNumber}>
              {currentIndex + 1} / {slides.length}
            </div>

            {/* Две фотографии рядом */}
            <div className={styles.imagePair}>
              <div className={styles.imageItem}>
                <img 
                  src={currentSlide.beforeImage} 
                  alt="Before"
                  className={styles.image}
                />
                <span className={styles.imageLabel}>before</span>
              </div>
              
              <div className={styles.imageItem}>
                <img 
                  src={currentSlide.afterImage} 
                  alt="After"
                  className={styles.image}
                />
                <span className={styles.imageLabel}>after</span>
              </div>
            </div>

            {/* Название проекта (если есть) */}
            {currentSlide.title && (
              <div className={styles.projectTitle}>
                {currentSlide.title}
              </div>
            )}
          </div>
        </div>

        <button 
          className={`${styles.navButton} ${styles.nextButton}`} 
          onClick={handleNext}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* Индикаторы слайдов */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterCarousel;