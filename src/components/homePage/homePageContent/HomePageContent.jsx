import styles from "./HomePageContent.module.css";
import { useTranslation } from "react-i18next";

const HomePgContnet = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contentContanier}>
      <div className={styles.content}>
        <p>{t("home-head")}</p>
        <p>{t("home-desc")}</p>
        <span>{t("home-desc2")} </span>
        <button>{t("home-shop")}</button>
      </div>
      <div className={styles.statistics}>
        <div>
          <span>{t("home-statistics1")}</span>
          <span>{t("home-statisDesc1")}</span>
        </div>
        <div>
          <span>{t("home-statistics2")}</span>
          <span>{t("home-statisDesc2")}</span>
        </div>
        <div>
          <span>{t("home-statistics3")}</span>
          <span>{t("home-statisDesc3")}</span>
        </div>
      </div>
      <div className={styles.appLink}>
        <a href="/">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M29.1617 33.5958C26.9002 35.4427 24.4311 35.1511 22.0542 34.2762C19.5389 33.3819 17.2313 33.343 14.5775 34.2762C11.2545 35.4816 9.50069 35.1317 7.51613 33.5958C-3.7451 23.8164 -2.08361 8.92387 10.7007 8.3795C13.816 8.51559 15.9851 9.8182 17.8082 9.93486C20.5312 9.46825 23.1388 8.12675 26.0464 8.30173C29.5309 8.53503 32.1616 9.70155 33.8923 11.8013C26.6925 15.4369 28.4002 23.4276 35 25.6634C33.6847 28.5797 31.977 31.4766 29.1386 33.6152L29.1617 33.5958ZM17.5774 8.26285C17.2313 3.92728 21.4081 0.349956 26.2079 0C26.8771 5.01603 20.8081 8.7489 17.5774 8.26285Z"
                fill="white"
              />
            </svg>
          </span>
          <div className={styles.downloadContent}>
            <span>{t("home-iosDow")}</span>
            <p> {t("home-ios")}</p>
          </div>
        </a>
        <a href="/">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_660_107)">
                <path
                  d="M18.6801 19.0695L0.165527 36.6165C0.373444 37.283 0.747076 37.8977 1.25786 38.4136C1.76865 38.9295 2.40307 39.3329 3.11262 39.593C3.82217 39.8531 4.58807 39.963 5.35178 39.9143C6.11548 39.8656 6.85676 39.6596 7.51896 39.312L28.3513 28.5793L18.6801 19.0695Z"
                  fill="#EA4335"
                />
                <path
                  d="M37.4016 16.0868L28.393 11.4191L18.2527 19.4685L28.4342 28.5541L37.3742 23.9364C38.1662 23.5612 38.8296 22.9972 39.2924 22.3053C39.7553 21.6135 40 20.8202 40 20.0115C40 19.2028 39.7553 18.4096 39.2924 17.7177C38.8296 17.0258 38.1662 16.4618 37.3742 16.0866L37.4016 16.0868Z"
                  fill="#FBBC04"
                />
                <path
                  d="M0.165429 3.3197C0.0535844 3.69397 -0.00212299 4.08014 -0.000195802 4.46783V35.4681C0.000908585 35.8557 0.0565645 36.2415 0.165429 36.6164L19.3146 19.5187L0.165429 3.3197Z"
                  fill="#4285F4"
                />
                <path
                  d="M18.818 19.9681L28.3927 11.4192L7.58803 0.636475C6.80526 0.221804 5.91499 0.00219444 5.00787 8.6686e-06C2.75678 -0.00394893 0.777715 1.34757 0.165527 3.30729L18.818 19.9681Z"
                  fill="#34A853"
                />
              </g>
              <defs>
                <clipPath id="clip0_660_107">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className={styles.downloadContent}>
            <span>{t("home-andrDow")}</span>
            <p>{t("home-android")}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePgContnet;
