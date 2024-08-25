import styles from "./OurServicesContent.module.css";
import { useTranslation } from "react-i18next";

const OurServicesContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.servicesContanier}>
        <h1>{t("services-head")}</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imgContanier}>
              <img
                src={`${process.env.PUBLIC_URL}/services4.png`}
                alt="plant 4"
              />
            </div>
            <div className={styles.content}>
              <div>{t("services1")}</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="16"
                  viewBox="0 0 29 16"
                  fill="none"
                >
                  <path
                    d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                    fill="#7C8761"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className={`${styles.card} ${styles.down1}`}>
            <div className={styles.imgContanier}>
              <img
                src={`${process.env.PUBLIC_URL}/services2.png`}
                alt="plant 4"
              />
            </div>
            <div className={styles.content}>
              <div>{t("services2")} </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="16"
                  viewBox="0 0 29 16"
                  fill="none"
                >
                  <path
                    d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                    fill="#7C8761"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContanier}>
              <img
                src={`${process.env.PUBLIC_URL}/services3.png`}
                alt="plant 4"
              />
            </div>
            <div className={styles.content}>
              <div>{t("services3")} </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="16"
                  viewBox="0 0 29 16"
                  fill="none"
                >
                  <path
                    d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                    fill="#7C8761"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className={`${styles.card} ${styles.down2}`}>
            <div className={styles.imgContanier}>
              <img
                src={`${process.env.PUBLIC_URL}/services4.png`}
                alt="plant 4"
              />
            </div>
            <div className={styles.content}>
              <div>{t("services4")} </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="16"
                  viewBox="0 0 29 16"
                  fill="none"
                >
                  <path
                    d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
                    fill="#7C8761"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesContent;
