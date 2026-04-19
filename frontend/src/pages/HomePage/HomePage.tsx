import { FC, useEffect, useState } from "react";
import { Button, ThemeButton } from "../../components/ui/Button/Button";
import { BeforeAfter } from "../../components/Before_After/BeforeAfter";
import { Contacts } from "../../components/Contacts/Contacts";

import styles from "./HomePage.module.scss";
import heroImage from "../../images/homepage.png";
import aboutImage from "../../images/about_image.png";
import { Service } from "../../components/Service/Service";
import { MAIN_CONTENT } from "./constants";
import { useAppSelector } from "../../services/hooks";
import { ThemeTitle, Title } from "../../components/ui/Title/Title";
import { ChooseUs } from "../../components/ChooseUs/ChooseUs";
import { WhoWork } from "../../components/WhoWork/WhoWork";
import Slider from "../../components/Slider/Slider";

export const HomePage: FC = () => {
  const lang = useAppSelector((state) => state.lang.lang);
  const [content, setContent] = useState(MAIN_CONTENT[lang]);

  useEffect(() => {
    setContent(MAIN_CONTENT[lang]);
  }, [lang]);

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
            We carry out renovations, modernizations, and conversions in
            existing buildings reliably, on schedule, and professionally. From
            the initial planning stage to final handover, we coordinate all
            trades and ensure smooth processes
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
            A renovation is more than just construction work. It requires clear
            processes, precise planning, and reliable coordination of everyone
            involved. That is exactly what we stand for
          </p>
          <p className={styles.about_text}>
            We support our clients from the initial idea through to completion
            and offer complete renovations from one source. Through close
            coordination of all trades, transparent scheduling and cost
            planning, and dedicated site management, we ensure safety, quality,
            and efficiency throughout the entire project.
          </p>
          <p className={styles.about_text}>
            Our focus is on conversions in existing buildings, apartment
            modernization, bathroom and kitchen renovations, as well as
            sustainable and functional solutions for long-term value retention
          </p>
        </div>

        <div className={styles.about_image_wrapper}>
          <img
            src={aboutImage}
            alt="Renovation"
            className={styles.about_image}
          />
        </div>
      </section>
      <section className={styles.services}>
        <Title theme={ThemeTitle.BLACK}>{content.service.title}</Title>
        <ul className={styles.services_list}>
          {content?.service?.services?.map((item, index) => (
            <li key={index} className={styles.services_item}>
              <Service {...item} id={index + 1}/>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.work}>
        <Title theme={ThemeTitle.PRIMARY}>{content.work.title}</Title>
        <Slider sliders={content.work.sliderData} />
      </section>
      <section className={styles.chooseUs}>
        <Title theme={ThemeTitle.BLACK}>{content.chooseUs.title}</Title>
        <ul className={styles.chooseUs_list}>
          {content.chooseUs.chooseUs.map((item, index) => (
            <li key={index} className={styles.chooseUs_item}>
              <ChooseUs title={item.title} text={item.text} img={item.img} />
            </li>
          ))}
        </ul>
      </section>

      <BeforeAfter
        title={content.beforeAfter.title}
        paragraphs={content.beforeAfter.paragraphs}
        imageSrc={content.beforeAfter.imgeSrc}
        imageAlt="Before and After works"
      />

      <section className={styles.whoWork}>
        <Title theme={ThemeTitle.BLACK}>{content.whoWork.title}</Title>
        <ul className={styles.whoWork_list}>
          {content.whoWork.whoWork.map((item, index) => (
            <li key={index} className={styles.whoWork_item}>
              <WhoWork icon={item.icon} title={item.title} />
            </li>
          ))}
        </ul>
        <p className={styles.whoWork_text}>{content.whoWork.text1}</p>
        <p className={styles.whoWork_text}>{content.whoWork.text2}</p>
      </section>

      <Contacts
        backgroundImage={content.contacts.backgroundImage}
        title={content.contacts.title}
        description={content.contacts.description}
        buttonText={content.contacts.buttonText}
      />
    </div>
  );
};
