import styles1 from "./ContactContent.module.css";
import styles2 from "../../../component.module.css";
import { useTranslation } from "react-i18next";

const ContactContent = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles1.contactContanier} `}>
      <h1>{t("contactUs")}</h1>
      <div className={`${styles1.formContanier} `}>
        <div className={`${styles1.form} ${styles2.inputs}`}>
          <h2>{t("contact")}</h2>
          <div>
            <input type="text" placeholder={t("firstName")} />
            <input type="text" placeholder={t("lastName")} />
          </div>
          <input type="email" placeholder={t("email")} />
          <input type="text" placeholder={t("message")} />

          <button>{t("send")}</button>
        </div>
        <div className={styles1.imgContanier}>
          <img src={`${process.env.PUBLIC_URL}/contact1.jpeg`} alt="plant 4" />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
