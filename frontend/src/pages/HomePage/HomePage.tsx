import { FC } from "react";
import styles from "./HomePage.module.scss";
import imageHome from "../../images/homepage/imageHome.png";
import livingRoom from "../../images/homepage/livingRoom.png";
import { services, slides, works } from "./constants";
import { renderWithLineBreaks } from "../../utils/utils";
import BeforeAfterCarousel from "../../components/Carousel/Carousel";
import { Form } from "../../components/Form/Form";

export const HomePage: FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h1 className={styles.intro_title}>
          <span className={styles.span}>FREE </span>up your time{" "}
        </h1>
        <p className={styles.intro_text}>
          <span className={styles.span}>WE TAKE </span>over the coordination of{" "}
          <span className={styles.span}>ALL WORK</span> , planning estimates and
          deadlines
        </p>
        <img src={imageHome} alt="Image" className={styles.intro_img} />
      </section>
      <section className={styles.aboutUs} id="About us">
        <h2 className={styles.span_item}>
          Single Source Repairs: Peace of mind and warranty
        </h2>
        <p className={styles.aboutUs_text}>
          Our specialization is the construction of private houses and complex
          renovation of premises. We have combined professional designers,
          engineers and finishers under one brand to ensure that you get the
          perfect result without intermediaries.
        </p>
        <div className={styles.aboutUs_block}>
          <img src={livingRoom} alt="Image" className={styles.aboutUs_img} />
          <ul className={styles.aboutUs_ul}>
            {services.map((item) => (
              <li className={styles.aboutUs_li}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.service} id="Services">
        <h2 className={styles.service_span}>What are we doing?</h2>
        <p className={styles.service_underSpan}>
          We build turnkey homes and renovate apartments. Full structural
          reconstruction, interior finish, and personal manager—all in one
          place. Deadlines, budget, and quality are on us.
        </p>
        <ul className={styles.service_ul}>
          {works.map((item) => (
            <li className={styles.service_li}>
              <h4 className={styles.service_title}>{item.title}</h4>
              <p className={styles.service_text}>
                {renderWithLineBreaks(item.text)}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.work} id="Our work">
        <h2 className={styles.work_title}>Examples of our work</h2>
        <BeforeAfterCarousel slides={slides} />
      </section>
      <section className={styles.contact} id="Contact">
        <h2 className={styles.contact_span}>
          Leave a request and we will contact you
        </h2>
        <Form />
      </section>
    </div>
  );
};
