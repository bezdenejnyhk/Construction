import { FC } from "react";
import styles from "./Service.module.scss";
import { Button } from "../ui/Button/Button";

type ServiceProps = {
  title: string;
  description: string;
  id?: number; 
  buttonText?: string
};

export const Service: FC<ServiceProps> = ({ title, description, id, buttonText }) => {
  const handleClick = () => {
    if (id) {
      window.location.href = `/services/${id}`;
    }
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{description}</p>
      {buttonText && (
        <Button onClick={handleClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};
