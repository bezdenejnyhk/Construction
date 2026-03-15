import { Route, Routes} from "react-router-dom";
import { FC, useEffect } from "react";
import styles from "./App.module.scss";
import { HomePage } from "../../pages";
import { Header } from "../layout";
import { NotFound } from "../../pages/NotFound/NotFound";

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
