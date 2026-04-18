import { FC, memo, ReactNode } from "react"
import styles from "./Title.module.scss";

export enum ThemeTitle {
  PRIMARY = "primary",
  BLACK = "black",
}

interface ITitleProps {
  theme?: ThemeTitle;
  children: ReactNode;
}

export const Title = memo((props: ITitleProps) => {
    return (
        <h2 className={props.theme === ThemeTitle.PRIMARY ? styles.primary : styles.black}>
            {props.children}
        </h2>
    )
})