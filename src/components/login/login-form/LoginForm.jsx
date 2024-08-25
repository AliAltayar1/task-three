import { Link } from "react-router-dom";
import styles1 from "./LoginForm.module.css";
import styles2 from "../../../component.module.css";

import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles1.loginform} ${styles2.formContanier}`}>
        <h1>{t("login")}</h1>
        <div className={styles2.inputs}>
          <input type="email" placeholder={t("email")} />
          <input type="text" placeholder={t("phonNumber")} />
          <input type="password" placeholder={t("pass")} />
        </div>
        <Link to="/welcome" className={styles1.loginRoute}>
          <button>{t("login")}</button>
        </Link>
        <div className={styles1.help}>
          <div>
            <a href="/">{t("fogetPass")}</a>
          </div>
          <div>
            <p>{t("dontHvANAcc")} </p>
            <Link to="/signup" className={styles1.singup}>
              {t("signup")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
