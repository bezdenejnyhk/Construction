import { FC } from "react";
import { Button, ThemeButton } from "../../components/ui/Button/Button";
import { BeforeAfter } from "../../components/Before_After/BeforeAfter";
import { Contacts } from "../../components/Contacts/Contacts";

import styles from "./HomePage.module.scss";
import heroImage from "../../images/homepage.png";
import aboutImage from "../../images/about_image.png";
import { Service } from "../../components/Service/Service";
import { chooseUs, services, whoWork } from "./constants";
import { ThemeTitle, Title } from "../../components/ui/Title/Title";
import { ChooseUs } from "../../components/ChooseUs/ChooseUs";
import { WhoWork } from "../../components/WhoWork/WhoWork";
import BeforeAfterImage from "../../images/before_after.png";
import contactsImage from "../../images/contacts.png";

export const HomePage: FC = () => {
  const beforeAfterData = {
    title: "RENOVATIONS THAT CONVINCE",
    paragraphs: [
      "Every project is unique. In our references,we showcase selected work in the areas of apartment renovation, bathroom modernization, interior fit-out, and conversions in existing buildings.",
      "Before-and-after projects clearly show how older or renovation-needy properties are transformed into modern, functional, and high-quality spaces.",
    ],
  };

  const contactsData = {
    backgroundImage: contactsImage,
    title: "ARE YOU PLANNING A RENOVATION OR MODERNIZATION?",
    description:
      "Talk to us about your project. We will advise you personally and develop a solution that fits your property, your budget, and your requirements.",
    buttonText: "Request a Non-Binding Quote",
  };

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
        <Title theme={ThemeTitle.BLACK}>OUR SERVICES</Title>
        <ul className={styles.services_list}>
          {services.map((service, index) => (
            <li key={index} className={styles.services_item}>
              <Service {...service} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.work}>
        <Title theme={ThemeTitle.PRIMARY}>How We Work</Title>
        <p>Slider</p>
      </section>
      <section className={styles.chooseUs}>
        <Title theme={ThemeTitle.BLACK}>Why Choose Us?</Title>
        <ul className={styles.chooseUs_list}>
          {chooseUs.map((item, index) => (
            <li key={index} className={styles.chooseUs_item}>
              <ChooseUs title={item.title} text={item.text} img={item.img} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.whoWork}>
        <Title theme={ThemeTitle.BLACK}>Who We Work For</Title>
        <ul className={styles.whoWork_list}>
          {whoWork.map((item, index) => (
            <li key={index} className={styles.whoWork_item}>
              <WhoWork icon={item.icon} title={item.title} />
            </li>
          ))}
        </ul>
        <p className={styles.whoWork_text}>
          Whether individual rooms need to be modernized or entire properties
          renovated, we provide the right solution.
        </p>
        <p className={styles.whoWork_text}>
          A successful renovation requires clear communication. That is why you
          have dedicated contact persons at your side who support, coordinate,
          and supervise your project. From the initial consultation to final
          completion, we keep an eye on every step and ensure that quality,
          deadlines, and processes are on track.
        </p>
      </section>

      <BeforeAfter
        title={beforeAfterData.title}
        paragraphs={beforeAfterData.paragraphs}
        imageSrc={BeforeAfterImage}
        imageAlt="Before and After works"
      />

      <Contacts
        backgroundImage={contactsData.backgroundImage}
        title={contactsData.title}
        description={contactsData.description}
        buttonText={contactsData.buttonText}
      />
    </div>
  );
};
