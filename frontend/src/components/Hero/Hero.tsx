import { FC } from "react";
import { Button, ThemeButton } from "../ui/Button/Button";
import styles from "./Hero.module.scss";

interface HeroProps {
  backgroundImage: string;
  supertitle: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  idSection?: string;
}

export const Hero: FC<HeroProps> = ({
  backgroundImage,
  supertitle,
  title,
  description,
  buttonText,
  onButtonClick,
  idSection,
}) => {
  return (
    <section
      id={idSection}
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.hero_overlay}></div>
      <div className={styles.hero_content}>
        <p className={styles.hero_supertitle}>{supertitle}</p>
        <h1 className={styles.hero_title}>{title}</h1>
        <p className={styles.hero_description}>{description}</p>
        <Button theme={ThemeButton.BLACK} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
};