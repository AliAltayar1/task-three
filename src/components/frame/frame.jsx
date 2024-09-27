import styles from "./Frame.module.css";
import { useTranslation } from "react-i18next";

const Frame = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.frame} full-width`}>
      <div className={styles.imgContanier}>
        <img src={`${process.env.PUBLIC_URL}/products2.png`} alt="plant" />
        <h1>{t("frame")} </h1>
      </div>
    </div>
  );
};

export default Frame;
