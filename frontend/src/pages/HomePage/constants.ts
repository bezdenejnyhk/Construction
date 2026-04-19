import image1 from "../../images/icon/admin_panel_settings.svg";
import image2 from "../../images/icon/how_to_reg.svg";
import image3 from "../../images/icon/inventory.svg";
import image4 from "../../images/icon/next_week.svg";
import image5 from "../../images/icon/verified.svg";
import image6 from "../../images/icon/users.svg";
import image7 from "../../images/icon/file-text.svg";
import image8 from "../../images/icon/home.svg";
import image9 from "../../images/icon/trending-up.svg";
import image10 from "../../images/icon/briefcase.svg";
import { LANG } from "../../types/lang";
import contactsImage from "../../images/contacts.png";
import BeforeAfterImage from "../../images/before_after.png";
import subimg1 from "../../images/subpage/image80.png";
import subimg2 from "../../images/subpage/image81.png";

export const MAIN_CONTENT = {
  [LANG.EN]: {
    hero: {},
    about: {},
    service: {
      title: "OUR SERVICES",
      services: [
        {
          title: "Full Refurbishment / Core Renovation",
          description:
            "We carry out the complete renovation of apartments, houses, and commercial properties. In doing so, we fundamentally modernize existing structures and create the foundation for contemporary living and working.",
          buttonText: "More detailed",
          children: [
            {
              backImage1: subimg1,
              backImage2: subimg2,
              title:
                "Core Renovation for Houses, Apartments & Existing Properties",
              description:
                "Core renovation by experienced professionals: We renovate houses, apartments, and existing properties professionally and reliably. Request a consultation now.",
              title2: "Would you like to comprehensively renew your property? ",
              description2:
                "We will advise you on the right core renovation for your house, apartment, or existing property.",

              buttonText: "Request a Consultation Now",
              buttonText2: "Request a Non-Binding Quote",
              info:
                "Core renovation is the right step when a property needs to be fundamentally renewed. We provide professional renovation services for apartments, houses, and existing buildings, creating the basis for modern, functional, and value-retaining living. With clear planning, professional coordination, and reliable site management, we implement demanding renovation projects efficiently.",
              dataInfo: [
                {
                  title: "What Is a Core Renovation?",
                  description:
                    "In a core renovation, the property is comprehensively reworked, often down to the load-bearing structure or essential basic elements. Old components, surfaces, and outdated fittings are renewed so that the building can once again be used in a contemporary technical and visual condition.",
                },
                {
                  title: "Why Core Renovation Makes Sense?",
                  description:
                    "Many older buildings have a high need for modernization. A core renovation provides the opportunity to eliminate defects, redesign spaces, and preserve the property’s value in the long term. At the same time, existing layouts can be optimized and living comfort can be significantly improved.",
                },
                {
                  title: "Our Core Renovation Services",
                  description:
                    "We take care of the planning, coordination, and execution of all necessary renovation measures. We ensure a structured process and coordinate all trades precisely. This creates the basis for high-quality results and reliable project implementation.",
                },
                {
                  title: "Core Renovation in Existing Buildings",
                  description:
                    "Experience is especially important when dealing with older existing properties. Existing structures, individual conditions, and technical challenges require a well-thought-out approach. We develop solutions that are both economically sensible and structurally sound.",
                },
              ],
            },
          ],
        },
        {
          title: "Interior Fit-Out",
          description:
            "Whether it is a new room layout, wall and ceiling design, flooring, or customized fit-out work, we create interiors that are functional, high-quality, and tailored to your requirements.",
          buttonText: "More detailed",
        },
        {
          title: "Facade and Roof Renovation",
          description:
            "Renovating the facade and roof protects your property, improves its appearance, and preserves the building’s value over the long term. We develop suitable solutions for existing buildings and modernization projects.",
          buttonText: "More detailed",
        },
        {
          title: "Energy-Efficient Renovation",
          description:
            "With energy-efficient measures, we improve the efficiency of your property and permanently reduce energy consumption and operating costs. In this way, we combine living comfort with sustainability.",
          buttonText: "More detailed",
        },
        {
          title: "Bathroom and Kitchen Renovationn",
          description:
            "Bathrooms and kitchens are among the most important rooms in any property. We modernize these spaces with well-thought-out concepts, high-quality materials, and precise workmanship.",
          buttonText: "More detailed",
        },
        {
          title: "Conversions in Existing Buildings",
          description:
            "Existing buildings require special expertise. We carry out conversions in existing properties with precision and with a clear focus on structure, function, and usability.",
          buttonText: "More detailed",
        },
        {
          title: "Barrier-Free Living",
          description:
            "We create living solutions that combine comfort, safety, and accessibility for a better quality of life at every stage of life.",
          buttonText: "More detailed",
        },
      ],
    },
    work: {
      title: "HOW WE WORK",
    },
    chooseUs: {
      title: "WHY CHOOSE US?",
      chooseUs: [
        {
          title: "Everything from a Single Source",
          text:
            "We coordinate all trades and take care of the entire organization of your project. This saves time, reduces coordination effort, and creates clear responsibilities.",
          img: image1,
        },
        {
          title: "Dedicated Contact Persons",
          text:
            "Throughout the entire project, you will have fixed contact persons. This keeps communication and decision-making processes clear and efficient.",
          img: image2,
        },
        {
          title: "Reliable Scheduling and Cost Planning",
          text:
            "Good planning is the foundation of every successful construction project. That is why we place great importance on transparent processes, realistic timelines, and understandable costs.",
          img: image3,
        },
        {
          title: "Experience with Existing Buildings",
          text:
            "Renovations and conversions in existing buildings come with special requirements. We understand the challenges and develop solutions that are technically and economically convincing.",
          img: image4,
        },
        {
          title: "Down to the Last Detail",
          text:
            "Clean execution, high-quality materials, and high standards in every detail are a matter of course for us.",
          img: image5,
        },
      ],
    },
    whoWork: {
      title: "Who We Work For",
      whoWork: [
        {
          icon: image6,
          title: "Private property owners",
        },
        {
          icon: image7,
          title: "Landlords",
        },
        {
          icon: image8,
          title: "Homeowners’ associations",
        },
        {
          icon: image9,
          title: "Investors",
        },
        {
          icon: image10,
          title: "Commercial clients",
        },
      ],
      text1:
        "Whether individual rooms need to be modernized or entire properties renovated, we provide the right solution.",
      text2:
        "A successful renovation requires clear communication. That is why you have dedicated contact persons at your side who support, coordinate, and supervise your project. From the initial consultation to final acceptance, we are there for you.",
    },
    beforeAfter: {
      title: "RENOVATIONS THAT CONVINCE",
      imgeSrc: BeforeAfterImage,
      paragraphs: [
        "Every project is unique. In our references,we showcase selected work in the areas of apartment renovation, bathroom modernization, interior fit-out, and conversions in existing buildings.",
        "Before-and-after projects clearly show how older or renovation-needy properties are transformed into modern, functional, and high-quality spaces.",
      ],
    },
    contacts: {
      backgroundImage: contactsImage,
      title: "ARE YOU PLANNING A RENOVATION OR MODERNIZATION?",
      description:
        "Talk to us about your project. We will advise you personally and develop a solution that fits your property, your budget, and your requirements.",
      buttonText: "Request a Non-Binding Quote",
    },
  },
  [LANG.DE]: {
    hero: {},
    about: {},
    service: {
      title: "OUR SERVICES",
      services: [
        {
          title: "Full Refurbishment / Core Renovation",
          description:
            "We carry out the complete renovation of apartments, houses, and commercial properties. In doing so, we fundamentally modernize existing structures and create the foundation for contemporary living and working.",
          buttonText: "More detailed",
          children: [
            {
              backImage1: subimg1,
              backImage2: subimg2,
              title:
                "Core Renovation for Houses, Apartments & Existing Properties",
              description:
                "Core renovation by experienced professionals: We renovate houses, apartments, and existing properties professionally and reliably. Request a consultation now.",
              title2: "Would you like to comprehensively renew your property? ",
              description2:
                "We will advise you on the right core renovation for your house, apartment, or existing property.",

              buttonText: "Request a Consultation Now",
              buttonText2: "Request a Non-Binding Quote",
              info:
                "Core renovation is the right step when a property needs to be fundamentally renewed. We provide professional renovation services for apartments, houses, and existing buildings, creating the basis for modern, functional, and value-retaining living. With clear planning, professional coordination, and reliable site management, we implement demanding renovation projects efficiently.",
              dataInfo: [
                {
                  title: "What Is a Core Renovation?",
                  description:
                    "In a core renovation, the property is comprehensively reworked, often down to the load-bearing structure or essential basic elements. Old components, surfaces, and outdated fittings are renewed so that the building can once again be used in a contemporary technical and visual condition.",
                },
                {
                  title: "Why Core Renovation Makes Sense?",
                  description:
                    "Many older buildings have a high need for modernization. A core renovation provides the opportunity to eliminate defects, redesign spaces, and preserve the property’s value in the long term. At the same time, existing layouts can be optimized and living comfort can be significantly improved.",
                },
                {
                  title: "Our Core Renovation Services",
                  description:
                    "We take care of the planning, coordination, and execution of all necessary renovation measures. We ensure a structured process and coordinate all trades precisely. This creates the basis for high-quality results and reliable project implementation.",
                },
                {
                  title: "Core Renovation in Existing Buildings",
                  description:
                    "Experience is especially important when dealing with older existing properties. Existing structures, individual conditions, and technical challenges require a well-thought-out approach. We develop solutions that are both economically sensible and structurally sound.",
                },
              ],
            },
          ],
        },
        {
          title: "Interior Fit-Out",
          description:
            "Whether it is a new room layout, wall and ceiling design, flooring, or customized fit-out work, we create interiors that are functional, high-quality, and tailored to your requirements.",
          buttonText: "More detailed",
        },
        {
          title: "Facade and Roof Renovation",
          description:
            "Renovating the facade and roof protects your property, improves its appearance, and preserves the building’s value over the long term. We develop suitable solutions for existing buildings and modernization projects.",
          buttonText: "More detailed",
        },
        {
          title: "Energy-Efficient Renovation",
          description:
            "With energy-efficient measures, we improve the efficiency of your property and permanently reduce energy consumption and operating costs. In this way, we combine living comfort with sustainability.",
          buttonText: "More detailed",
        },
        {
          title: "Bathroom and Kitchen Renovationn",
          description:
            "Bathrooms and kitchens are among the most important rooms in any property. We modernize these spaces with well-thought-out concepts, high-quality materials, and precise workmanship.",
          buttonText: "More detailed",
        },
        {
          title: "Conversions in Existing Buildings",
          description:
            "Existing buildings require special expertise. We carry out conversions in existing properties with precision and with a clear focus on structure, function, and usability.",
          buttonText: "More detailed",
        },
        {
          title: "Barrier-Free Living",
          description:
            "We create living solutions that combine comfort, safety, and accessibility for a better quality of life at every stage of life.",
          buttonText: "More detailed",
        },
      ],
    },
    work: {
      title: "HOW WE WORK",
    },
    chooseUs: {
      title: "WHY CHOOSE US?",
      chooseUs: [
        {
          title: "Everything from a Single Source",
          text:
            "We coordinate all trades and take care of the entire organization of your project. This saves time, reduces coordination effort, and creates clear responsibilities.",
          img: image1,
        },
        {
          title: "Dedicated Contact Persons",
          text:
            "Throughout the entire project, you will have fixed contact persons. This keeps communication and decision-making processes clear and efficient.",
          img: image2,
        },
        {
          title: "Reliable Scheduling and Cost Planning",
          text:
            "Good planning is the foundation of every successful construction project. That is why we place great importance on transparent processes, realistic timelines, and understandable costs.",
          img: image3,
        },
        {
          title: "Experience with Existing Buildings",
          text:
            "Renovations and conversions in existing buildings come with special requirements. We understand the challenges and develop solutions that are technically and economically convincing.",
          img: image4,
        },
        {
          title: "Down to the Last Detail",
          text:
            "Clean execution, high-quality materials, and high standards in every detail are a matter of course for us.",
          img: image5,
        },
      ],
    },
    whoWork: {
      title: "Who We Work For",
      whoWork: [
        {
          icon: image6,
          title: "Private property owners",
        },
        {
          icon: image7,
          title: "Landlords",
        },
        {
          icon: image8,
          title: "Homeowners’ associations",
        },
        {
          icon: image9,
          title: "Investors",
        },
        {
          icon: image10,
          title: "Commercial clients",
        },
      ],
      text1:
        "Whether individual rooms need to be modernized or entire properties renovated, we provide the right solution.",
      text2:
        "A successful renovation requires clear communication. That is why you have dedicated contact persons at your side who support, coordinate, and supervise your project. From the initial consultation to final acceptance, we are there for you.",
    },
    beforeAfter: {
      title: "RENOVATIONS THAT CONVINCE",
      imgeSrc: BeforeAfterImage,
      paragraphs: [
        "Every project is unique. In our references,we showcase selected work in the areas of apartment renovation, bathroom modernization, interior fit-out, and conversions in existing buildings.",
        "Before-and-after projects clearly show how older or renovation-needy properties are transformed into modern, functional, and high-quality spaces.",
      ],
    },
    contacts: {
      backgroundImage: contactsImage,
      title: "ARE YOU PLANNING A RENOVATION OR MODERNIZATION?",
      description:
        "Talk to us about your project. We will advise you personally and develop a solution that fits your property, your budget, and your requirements.",
      buttonText: "Request a Non-Binding Quote",
    },
  },
};
