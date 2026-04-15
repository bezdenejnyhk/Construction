import { Route, Routes} from "react-router-dom";
import { FC, useEffect } from "react";
import styles from "./App.module.scss";
import { Header } from "../layout";
import { NotFound } from "../../pages/NotFound/NotFound";
import { HomePage } from "../../pages/HomePage/HomePage";

export const App: FC = () => {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <div className={styles.grass}></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Header />
      </div>
    </div>
  );
};

export default App;
