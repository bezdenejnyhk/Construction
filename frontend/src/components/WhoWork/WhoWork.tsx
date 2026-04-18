import { FC } from "react"
import styles from "./WhoWork.module.scss";

interface IWhoWorkProps {
    icon: string;
    title: string;
}

export const WhoWork: FC<IWhoWorkProps> = ({ icon, title }) => {
    return (
        <div className={styles.container}>
            <img src={icon} alt="icon"/>
            <h4 className={styles.title}>{title}</h4>
        </div>
    )
}