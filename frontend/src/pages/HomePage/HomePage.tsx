import { FC } from "react";
import { Button, ThemeButton } from "../../components/ui/Button/Button";
import styles from "./HomePage.module.scss";
import heroImage from "../../images/homepage.png";
import aboutImage from "../../images/about_image.png";

export const HomePage: FC = () => {
  return (
    <div className={styles.container}>
      <section 
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImage})` }} 
      >
        <div className={styles.hero_overlay}></div>      
        <div className={styles.hero_content}>
          <p className={styles.hero_supertitle}>
            YOUR PARTNER FOR RENOVATION, INTERIOR FIT-OUT, AND MODERNIZATION
          </p>
          <h1 className={styles.hero_title}>BUILDOVA</h1>  
          <p className={styles.hero_description}>
            We carry out renovations, modernizations, and conversions in existing buildings 
            reliably, on schedule, and professionally. From the initial planning stage to final 
            handover, we coordinate all trades and ensure smooth processes
          </p>
          <Button theme={ThemeButton.BLACK}>Request a Consultation Now</Button>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.about_content}>
          <h2 className={styles.about_title}>
            RENOVATION WITH STRUCRURE, EXPERIENCE, AND RESPONSIBILITY
          </h2>
           
          <p className={styles.about_text}>
            A renovation is more than just construction work.
            It requires clear processes, precise planning, and reliable coordination of everyone involved.
            That is exactly what we stand for
          </p>
          <p className={styles.about_text}>
            We support our clients from the initial idea through to completion and offer complete renovations from one source.
           Through close coordination of all trades, transparent scheduling and cost planning, and dedicated site management,
            we ensure safety, quality, and efficiency throughout the entire project.
          </p>
          <p className={styles.about_text}>
            Our focus is on conversions in existing buildings, apartment modernization, bathroom and kitchen renovations,
            as well as sustainable and functional solutions for long-term value retention
          </p>
        </div>

        <div className={styles.about_image_wrapper}>
         <img src={aboutImage} alt="Renovation" className={styles.about_image} />
       </div>
      </section>  
    </div>
  );
};

      {/* <section className={styles.intro}>
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
      </section> */}