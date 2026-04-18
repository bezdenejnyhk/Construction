import { FC, useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import logo from "../../../images/logo.svg";
import phone from '../../../images/icon/ph_phone.svg'
import { useAppSelector } from "../../../services/hooks";
import { headerContent } from "../constant";
export const Footer: FC = () => {
    const lang =  useAppSelector((state) => state.lang.lang);
  const [content, setContent] = useState(headerContent[lang]);

  useEffect(() => {
    setContent(headerContent[lang]);
  }, [lang]);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <ul className={styles.routes}>
          {content && 'routes' in content && content.routes.map((item, index) => (
            <li className={styles.routes_item} key={index}>
              <a href={'#'+item.path} className={styles.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a href='tel:+74958034053' className={styles.phone}>
            <img src={phone} alt="Phone"/>
            +7 (495) 803-40-53
          </a>
      </div>
    </div>
  );
};
