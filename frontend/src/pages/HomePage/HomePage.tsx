import { FC, useEffect, useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About";
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
      <Hero
        idSection="hero"
        backgroundImage={heroImage}
        supertitle={content.hero.supertitle}
        title={content.hero.title}
        description={content.hero.description}
        buttonText={content.hero.buttonText}
      />

      <About
        idSection="about-us"
        title={content.about.title}
        text1={content.about.text1}
        text2={content.about.text2}
        text3={content.about.text3}
        imageSrc={aboutImage}
        imageAlt="Renovation"
      />

      <section className={styles.services} id="services">
        <Title theme={ThemeTitle.BLACK}>{content.service.title}</Title>
        <ul className={styles.services_list}>
          {content?.service?.services?.map((item, index) => (
            <li key={index} className={styles.services_item}>
              <Service {...item} id={index + 1} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.work} id="portfolio">
        <Title theme={ThemeTitle.PRIMARY}>{content.work.title}</Title>
        <Slider sliders={content.work.sliderData} />
      </section>
      <section className={styles.chooseUs} id="our-company">
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
        idSection="contacts"
        backgroundImage={content.contacts.backgroundImage}
        title={content.contacts.title}
        description={content.contacts.description}
        buttonText={content.contacts.buttonText}
      />
    </div>
  );
};
