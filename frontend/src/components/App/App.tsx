import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { FC, useEffect } from "react";
import styles from "./App.module.scss";
import { Header } from "../layout";
import { NotFound } from "../../pages/NotFound/NotFound";
import { HomePage } from "../../pages/HomePage/HomePage";
import { Footer } from "../layout/Footer/Footer";
import { useAppSelector } from "../../services/hooks";
import { LANG } from "../../types/lang";

export const App: FC = () => {
  const lang = useAppSelector((state) => state.lang.lang);
  const location = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
    const curr_lang = localStorage.getItem("lang");
    if (!curr_lang) {
      localStorage.setItem("lang", LANG.EN);
    } else {
      localStorage.setItem("lang", curr_lang);
    }
    if (location.pathname === "/") {
      navigate(`/${curr_lang}`);
    }
  }, [location.pathname, navigate]);
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path={`/${lang}`} element={<HomePage />} />
          <Route path={`*${lang}`} element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
