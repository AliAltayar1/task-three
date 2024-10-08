import styles1 from "./WelcomeBox.module.css";
import styles2 from "../../../component.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WelcomeBox = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles1.WelcomeBox} ${styles2.formContanier}`}>
        <div>
          <Link to="/login">
            <button>{t("logout")}</button>
          </Link>
          <Link to="/landing">
            <button>{t("home")}</button>
          </Link>
        </div>

        <p>{t("welcome")}</p>
        <div className={styles1.imgContanier}>
          <div className={styles1.img}>
            <img src={`${process.env.PUBLIC_URL}/plant2.png`} alt="plant2" />
          </div>
          <div className={styles1.img}>
            <img src={`${process.env.PUBLIC_URL}/plant1.png`} alt="plant1" />
          </div>
          <div className={styles1.img}>
            <img src={`${process.env.PUBLIC_URL}/plant3.png`} alt="plant3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBox;
