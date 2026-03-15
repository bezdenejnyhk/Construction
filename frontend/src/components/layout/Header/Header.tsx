import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../../images/logo.svg";
import { routesEN } from "./constant";

export const Header: FC = () => {

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
        <p className={styles.phone}>Phone: +79999999999</p>
      </div>
    </div>
  );
};
