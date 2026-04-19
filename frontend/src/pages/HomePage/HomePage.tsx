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
          <p className={styles.hero_supertitle}>{content.hero.supertitle}</p>
          <h1 className={styles.hero_title}>{content.hero.title}</h1>
          <p className={styles.hero_description}>{content.hero.description}</p>
          <Button theme={ThemeButton.BLACK}>{content.hero.buttonText}</Button>
        </div>
      </section>

      <section className={styles.about} id="about-us">
        <div className={styles.about_content}>
          <h2 className={styles.about_title}>{content.about.title}</h2>

          <p className={styles.about_text}>{content.about.text1}</p>
          <p className={styles.about_text}>{content.about.text2}</p>
          <p className={styles.about_text}>{content.about.text3}</p>
        </div>

        <div className={styles.about_image_wrapper}>
          <img
            src={aboutImage}
            alt="Renovation"
            className={styles.about_image}
          />
        </div>
      </section>
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
