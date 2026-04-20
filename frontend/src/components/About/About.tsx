import { FC } from "react";
import styles from "./About.module.scss";

interface AboutProps {
  idSection?: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  imageSrc: string;
  imageAlt: string;
}

export const About: FC<AboutProps> = ({
  idSection,
  title,
  text1,
  text2,
  text3,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className={styles.about} id={idSection}>
      <div className={styles.about_content}>
        <h2 className={styles.about_title}>{title}</h2>
        <p className={styles.about_text}>{text1}</p>
        <p className={styles.about_text}>{text2}</p>
        <p className={styles.about_text}>{text3}</p>
      </div>

      <div className={styles.about_image_wrapper}>
        <img src={imageSrc} alt={imageAlt} className={styles.about_image} />
      </div>
    </section>
  );
};