import styles from "./NotFound.module.scss";

export const NotFound = () => {

  return (
    <div className={styles.conatiner}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Not found</p>
    </div>
  );
};
