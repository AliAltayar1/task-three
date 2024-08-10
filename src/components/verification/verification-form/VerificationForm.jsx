import styles from "./VerificationForm.module.css";
import VerificationCode from "./verification-code/VerificationCode";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VerificationForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.singupform}>
        <h1>{t("enterCode")}</h1>
        <div className={styles.icon}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.36824 5.7975V16.9485C2.36824 23.019 8.02412 27.939 15 27.939C21.9759 27.939 27.6318 23.019 27.6318 16.9485V5.8035L14.9241 2.169L2.36824 5.7975ZM14.9206 0L30 4.311V16.9485C30 24.156 23.2835 30 15 30C6.71647 30 0 24.156 0 16.9485V4.311L14.9206 0ZM22.7188 9.7275C22.6036 9.63756 22.4683 9.56826 22.3209 9.52374C22.1736 9.47922 22.0171 9.46039 21.861 9.46836C21.7049 9.47634 21.5522 9.51097 21.4122 9.57018C21.2721 9.62939 21.1476 9.71198 21.0459 9.813L13.4294 17.2665L8.50941 12.639C8.40539 12.5399 8.27899 12.4597 8.13773 12.403C7.99647 12.3463 7.84324 12.3144 7.68716 12.309C7.53107 12.3037 7.37533 12.3252 7.22918 12.372C7.08304 12.4189 6.94949 12.4903 6.83647 12.582C6.60589 12.7704 6.47025 13.0274 6.45807 13.2991C6.44589 13.5707 6.55813 13.8358 6.77118 14.0385L12.5771 19.4985C12.6876 19.6042 12.8236 19.6885 12.9757 19.7457C13.1278 19.803 13.2926 19.8319 13.459 19.8305C13.6254 19.8291 13.7895 19.7974 13.9402 19.7375C14.091 19.6777 14.2249 19.591 14.3329 19.4835L22.8159 11.1825C23.0244 10.9764 23.1308 10.7097 23.1127 10.4384C23.0946 10.167 22.9534 9.9122 22.7188 9.7275Z"
              fill="#1A5319"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <p>{t("verifyNote")}</p>
          <span>{t("verifyiEx")}</span>
        </div>
        <VerificationCode></VerificationCode>
        <Link to="/welcome" className={styles.welcomeRoute}>
          <button>{t("verify")}</button>
        </Link>
      </div>
    </>
  );
};

export default VerificationForm;
