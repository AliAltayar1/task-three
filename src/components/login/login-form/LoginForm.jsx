import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.loginform}>
        <h1>{t("login")}</h1>
        <div className={styles.inputs}>
          <input type="email" placeholder={t("email")} />
          <input type="text" placeholder={t("phonNumber")} />
          <input type="password" placeholder={t("pass")} />
        </div>
        <Link to="/welcome" className={styles.loginRoute}>
          <button>{t("login")}</button>
        </Link>
        <div className={styles.help}>
          <div>
            <a href="/">{t("fogetPass")}</a>
          </div>
          <div>
            <p>{t("dontHvANAcc")} </p>
            <Link to="/signup" className={styles.singup}>
              {t("signup")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
