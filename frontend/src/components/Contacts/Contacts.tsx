import { FC } from "react";
import { Button, ThemeButton } from "../../components/ui/Button/Button";
import styles from "./Contacts.module.scss";

interface ContactsProps {
 backgroundImage: string;
 title: string;
 description: string;
 buttonText: string;
 onButtonClick?: () => void;
 idSection?: string;
}

export const Contacts: FC<ContactsProps> = ({
 backgroundImage,   
 title,
 description,
 buttonText,
 onButtonClick,
 idSection,
}) => {
  return (
    <section
    id={idSection}
      className={styles.contacts}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.contacts_overlay}></div>
      <div className={styles.contacts_content}>
        <h2 className={styles.contacts_title}>{title}</h2>
        <p className={styles.contacts_description}>{description}</p>
        <Button theme={ThemeButton.BLACK}>{buttonText}</Button>
      </div>
    </section>
  );
};