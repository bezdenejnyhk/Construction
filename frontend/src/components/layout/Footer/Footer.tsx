import { FC, useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import logo from "../../../images/logo.svg";
import { routesEN } from "../constant";
import phone from '../../../images/icon/ph_phone.svg'

export const Footer: FC = () => {

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <ul className={styles.routes}>
          {routesEN.map((item, index) => (
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
