import { FC } from "react";
import styles from "./Service.module.scss";
import { Button } from "../ui/Button/Button";

type ServiceProps = {
  title: string;
  description: string;
  url: string;
};

export const Service: FC<ServiceProps> = ({ title, description, url }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{description}</p>
      <Button onClick={() => (window.location.href = url)}>
        More detailed
      </Button>
    </div>
  );
};
