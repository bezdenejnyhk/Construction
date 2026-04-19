import { FC, useEffect, useState } from "react"
import styles from "./Subpage.module.scss"
import { Contacts } from "../../components/Contacts/Contacts"
import { MAIN_CONTENT } from "../HomePage/constants";
import { useAppSelector } from "../../services/hooks";
import { Service } from "../../components/Service/Service";

export const Subpage: FC = () => {
const lang = useAppSelector((state) => state.lang.lang);
  const [serviceData, setServiceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getId = () => {
      const pathParts = window.location.pathname.split('/');
      const lastPart = pathParts[pathParts.length - 1];
      return Number(lastPart);
    };

    const serviceId = getId();
    const services = MAIN_CONTENT[lang]?.service?.services || [];
    
    if (serviceId >= 1 && serviceId <= services.length) {
      const service = services[serviceId - 1];
      const data = service?.children?.[0];
      setServiceData(data);
    }
    setLoading(false);
  }, [lang]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!serviceData) {
    return <div>Service not found</div>;
  }

    return(<>
    <Contacts
            backgroundImage={serviceData.backImage1}
            title={serviceData.title}
            description={serviceData.description}
            buttonText={serviceData.buttonText}
          />
        <div className={styles.content}>
            <p className={styles.text}>{serviceData.info}</p>
             <ul className={styles.content_list}>
          {serviceData.dataInfo.map((item: any, index: number) => (
            <li key={index} className={styles.services_item}>
              <Service {...item}/>
            </li>
          ))}
        </ul>
        </div>
        <Contacts
            backgroundImage={serviceData.backImage2}
            title={serviceData.title2}
            description={serviceData.description2}
            buttonText={serviceData.buttonText2}
          />
    </>)
}