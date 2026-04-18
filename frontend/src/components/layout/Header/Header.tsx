import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../../images/logo.svg";
import { headerContent } from "../constant";
import phone from "../../../images/icon/ph_phone.svg";
import { LANG, languagesSmallname, TLang } from "../../../types/lang";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { setLang } from "../../../services/slices/lang";
import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../../../images/icon/arrow_down.svg";
import { Gamburger } from "./Gamburger";

export const Header: FC = () => {
  const { lang } = useAppSelector((state) => state.lang);
  const [content, setContent] = useState(headerContent[lang]);
  const [openDropDownLang, setOpenDropDownLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setContent(headerContent[lang]);
  }, [lang]);

  const changeLang = (_lang: TLang) => {
    if (lang !== _lang) {
      localStorage.setItem("lang", _lang);
      dispatch(setLang(_lang));
      setOpenDropDownLang(false);
      navigate(location.pathname.replaceAll(`/${lang}`, `/${_lang}`));
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <ul className={styles.routes}>
          {content &&
            "routes" in content &&
            content.routes.map((item: { name: string; path: string; }, index: number) => (
              <li className={styles.routes_item} key={index}>
                <a href={"#" + item.path} className={styles.link}>
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
        <div className={styles.block}>
          <div className={styles.languages}>
            <button
              className={styles.languages__button}
              onClick={() => setOpenDropDownLang(!openDropDownLang)}
            >
              {languagesSmallname[lang]}
              <img src={content.flag} className={styles.flag} alt="flag" />
              <img
                src={arrow}
                className={`${styles.arrow} ${openDropDownLang && styles.open}`}
                alt="arrow dropdown"
              />
            </button>

            <ul className={`${styles.list} ${openDropDownLang && styles.open}`}>
              {Object.entries(LANG).map(([_, key]) => (
                <li
                  className={styles.list__item}
                  key={key}
                  onClick={() => changeLang(key)}
                >
                  {languagesSmallname[key]}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.phone_block}>
            <img src={phone} alt="Phone" />
            <Gamburger open={openMenu} setOpen={setOpenMenu} />
            <a href="tel:+74958034053" className={styles.phone}>
              +7 (495) 803-40-53
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.menu} ${openMenu && styles.open}`}>
                <ul className={styles.menu_routes}>
          {content &&
            "routes" in content &&
            content.routes.map((item: { name: string; path: string; }, index: number) => (
              <li className={styles.routes_item} key={index}>
                <a href={"#" + item.path} className={styles.link}>
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
        <div className={styles.menu_block}>
          <div className={styles.languages}>
            <button
              className={styles.languages__button}
              onClick={() => setOpenDropDownLang(!openDropDownLang)}
            >
              {languagesSmallname[lang]}
              <img src={content.flag} className={styles.flag} alt="flag" />
              <img
                src={arrow}
                className={`${styles.arrow} ${openDropDownLang && styles.open}`}
                alt="arrow dropdown"
              />
            </button>

            <ul className={`${styles.list} ${openDropDownLang && styles.open}`}>
              {Object.entries(LANG).map(([_, key]) => (
                <li
                  className={styles.list__item}
                  key={key}
                  onClick={() => changeLang(key)}
                >
                  {languagesSmallname[key]}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
    </div>
  );
};
