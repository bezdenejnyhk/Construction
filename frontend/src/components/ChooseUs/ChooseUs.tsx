import { FC } from "react"
import styles from "./ChooseUs.module.scss";

type ChooseUsProps = {
    text: string;
    title: string;
    img: string;
}

export const ChooseUs: FC<ChooseUsProps> = ({ text, title, img }) => {
  return (
    <div className={styles.container}>
        <img src={img} alt="choose us"/>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
    </div>

  )
}

