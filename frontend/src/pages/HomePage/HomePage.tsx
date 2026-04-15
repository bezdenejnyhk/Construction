import { FC } from "react";
import { Button } from "../../components/ui/Button/Button";
import styles from "./HomePage.module.scss";

export const HomePage: FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <p className={styles.hero_supertitle}>YOUR PARTNER FOR RENOVATION</p>
          <h1 className={styles.hero_title}>
            INTERIOR FIT-OUT, AND MODERNIZATION
          </h1>
          <div className={styles.hero_logo}>
            <span className={styles.hero_logo_text}>BUILDOVA</span>
          </div>
          <p className={styles.hero_description}>
            We carry out renovations, modernizations, and conversions in existing buildings 
            reliably, on schedule, and professionally. From the initial planning stage to final 
            handover, we coordinate all trades and ensure smooth processes.
          </p>
          <Button>Request a Consultation Now</Button>
        </div>
        <div className={styles.hero_image}>
          <div className={styles.hero_placeholder}>Hero Image</div>
        </div>
      </section>
    </div>
  );
};