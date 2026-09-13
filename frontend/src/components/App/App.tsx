import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { FC, useEffect } from "react";
import styles from "./App.module.scss";
import { Header } from "../layout";
import { NotFound } from "../../pages/NotFound/NotFound";
import { HomePage } from "../../pages/HomePage/HomePage";
import { Footer } from "../layout/Footer/Footer";
import { useAppSelector } from "../../services/hooks";
import { LANG, LANGS, TLang } from "../../types/lang";
import { Subpage } from "../../pages/Subpage/Subpage";

export const App: FC = () => {
  const lang = useAppSelector((state) => state.lang.lang);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as TLang | null;
    const curr_lang = storedLang && LANGS.includes(storedLang) ? storedLang : LANG.EN;
    localStorage.setItem("lang", curr_lang);

    if (location.pathname === "/") {
      navigate(`/${curr_lang}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const sectionId = decodeURIComponent(location.hash.slice(1));
      document.getElementById(sectionId)?.scrollIntoView();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path={`/${lang}`} element={<HomePage />} />
          <Route path="/services/:id" element={<Subpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
