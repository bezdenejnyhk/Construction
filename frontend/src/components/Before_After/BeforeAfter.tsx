import { FC } from "react";
import styles from "./BeforeAfter.module.scss";

interface BeforeAfterProps {
 title: string;
 paragraphs: string[];
 imageSrc: string;
 imageAlt: string;
}

export const BeforeAfter: FC<BeforeAfterProps> = ({
 title,
 paragraphs,
 imageSrc,
 imageAlt,
}) => {
    return (
      <section className={styles.beforeAfter}>
          <div className={styles.beforeAfter_content}>
                <h2 className={styles.beforeAfter_title}> { title } </h2>

                {paragraphs.map((text, index) => (
                    <p key={index} className={styles.beforeAfter_text}>
                      { text }  
                    </p>
                ))}
          </div>
          <div className={styles.beforeAfter_image_wrapper}>
            <img src={imageSrc} alt={imageAlt} className={styles.beforeAfter_image} />
          </div>
     </section>
    )
}