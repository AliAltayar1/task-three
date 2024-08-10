import styles from "./WelcomeBox.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WelcomeBox = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.welcomebox}>
        <Link to="/login">
          <button>{t("logout")}</button>
        </Link>
        <p>{t("welcome")}</p>
        <div className={styles.imgContanier}>
          <div className={styles.img}>
            <img src={`${process.env.PUBLIC_URL}/plant2.png`} alt="plant2" />
          </div>
          <div className={styles.img}>
            <img src={`${process.env.PUBLIC_URL}/plant1.png`} alt="plant1" />
          </div>
          <div className={styles.img}>
            <img src={`${process.env.PUBLIC_URL}/plant3.png`} alt="plant3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBox;
