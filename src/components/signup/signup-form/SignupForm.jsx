import styles from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingupForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.singupform}>
        <h1>{t("signup")}</h1>
        <div className={styles.icon}>
          <svg
            width="45"
            height="40"
            viewBox="0 0 45 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="solar:user-plus-bold">
              <path
                id="Vector"
                d="M22.5 16.6667C26.6421 16.6667 30 13.6819 30 9.99999C30 6.3181 26.6421 3.33333 22.5 3.33333C18.3579 3.33333 15 6.3181 15 9.99999C15 13.6819 18.3579 16.6667 22.5 16.6667Z"
                fill="#1A5319"
              />
              <path
                id="Vector_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.9375 36.6667C27.8438 36.6667 26.2969 36.6667 25.3369 35.8117C24.375 34.9583 24.375 33.5833 24.375 30.8333C24.375 28.0833 24.375 26.7083 25.3369 25.855C26.2969 25 27.8438 25 30.9375 25C34.0312 25 35.5781 25 36.5381 25.855C37.5 26.7083 37.5 28.0833 37.5 30.8333C37.5 33.5833 37.5 34.9583 36.5381 35.8117C35.5781 36.6667 34.0312 36.6667 30.9375 36.6667ZM32.0306 28.24C32.0306 27.9823 31.9155 27.7352 31.7105 27.5529C31.5055 27.3707 31.2274 27.2683 30.9375 27.2683C30.6476 27.2683 30.3695 27.3707 30.1645 27.5529C29.9595 27.7352 29.8444 27.9823 29.8444 28.24V29.8617H28.02C27.7301 29.8617 27.452 29.964 27.247 30.1463C27.042 30.3285 26.9269 30.5756 26.9269 30.8333C26.9269 31.091 27.042 31.3382 27.247 31.5204C27.452 31.7026 27.7301 31.805 28.02 31.805H29.8444V33.4267C29.8444 33.6844 29.9595 33.9315 30.1645 34.1137C30.3695 34.296 30.6476 34.3983 30.9375 34.3983C31.2274 34.3983 31.5055 34.296 31.7105 34.1137C31.9155 33.9315 32.0306 33.6844 32.0306 33.4267V31.805H33.855C34.1449 31.805 34.423 31.7026 34.628 31.5204C34.833 31.3382 34.9481 31.091 34.9481 30.8333C34.9481 30.5756 34.833 30.3285 34.628 30.1463C34.423 29.964 34.1449 29.8617 33.855 29.8617H32.0306V28.24Z"
                fill="#1A5319"
              />
              <path
                id="Vector_3"
                d="M29.3963 22.505C28.5094 22.5133 27.6825 22.5433 26.9625 22.6283C25.7569 22.7733 24.4369 23.1167 23.3475 24.0867C22.2563 25.055 21.87 26.2283 21.7088 27.3C21.5625 28.2633 21.5625 29.44 21.5625 30.69V30.9767C21.5625 32.2267 21.5625 33.4033 21.7088 34.3667C21.8213 35.1183 22.0463 35.92 22.5469 36.6667H22.5C7.5 36.6667 7.5 33.3083 7.5 29.1667C7.5 25.025 14.2162 21.6667 22.5 21.6667C24.9863 21.6667 27.3319 21.9683 29.3963 22.505Z"
                fill="#1A5319"
              />
            </g>
          </svg>
        </div>
        <div className={styles.inputs}>
          <div>
            <input type="text" placeholder={t("usrName")} />
            <input type="text" placeholder={t("phonNumber")} />
          </div>
          <div>
            <input type="email" placeholder={t("email")} />
            <input type="password" placeholder={t("pass")} />
          </div>
          <div>
            <input type="password" placeholder={t("rePass")} />
            <input type="text" placeholder={t("uplodfile")} />
          </div>
        </div>
        <Link to="/verification" className={styles.verificationRoute}>
          <button>{t("signup")}</button>
        </Link>
        <div className={styles.help}>
          <div>
            <p>{t("haveAnAcc")} </p>
            <Link to="/login" className={styles.login}>
              {t("login")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingupForm;
