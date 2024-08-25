import styles from "./Offer.module.css";
import { useTranslation } from "react-i18next";

const Offer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.offer}>
      <div className={styles.imgContanier}>
        <img src={`${process.env.PUBLIC_URL}/offer.png`} alt="plant 4" />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73"
            height="72"
            viewBox="0 0 73 72"
            fill="none"
          >
            <path
              d="M73 35.9624C73 35.1297 72.5882 34.3977 71.9615 33.9386L71.9748 33.916L63.1483 28.8514L68.2289 20.1052L68.2119 20.0948C68.3721 19.7343 68.4447 19.3413 68.4238 18.9478C68.4029 18.5542 68.2891 18.171 68.0917 17.8292C67.8923 17.488 67.6149 17.1983 67.2818 16.9835C66.9488 16.7687 66.5695 16.6349 66.1747 16.5929V16.5685H55.9813V6.46651H55.9605C55.9179 6.07465 55.7831 5.69827 55.567 5.36778C55.3509 5.0373 55.0596 4.76198 54.7166 4.56409C54.3724 4.36682 53.986 4.25332 53.5892 4.23288C53.1923 4.21244 52.7963 4.28564 52.4333 4.44649L52.421 4.42485L43.446 9.5751L38.4761 1.01895L38.4581 1.0293C38.224 0.711143 37.9179 0.452194 37.5645 0.273385C37.2111 0.0945758 36.8204 0.000924135 36.4238 0C35.586 0 34.8486 0.409272 34.3876 1.03212L34.3649 1.01895L29.3127 9.71623L20.613 4.72404L20.6026 4.74192C20.2399 4.58271 19.8445 4.51058 19.4485 4.53133C19.0525 4.55209 18.667 4.66516 18.3231 4.86141C17.9796 5.05946 17.6879 5.33517 17.4716 5.66618C17.2554 5.9972 17.1206 6.3742 17.0783 6.76664H17.0527V16.8093H7.00702V16.8291C6.61275 16.8715 6.23406 17.0055 5.90154 17.2202C5.56902 17.435 5.29201 17.7245 5.09291 18.0654C4.89531 18.4075 4.78154 18.791 4.76081 19.185C4.74009 19.5789 4.813 19.9721 4.97364 20.3329L4.95186 20.346L9.91793 28.8956L1.02521 33.9988L1.03562 34.0167C0.715513 34.2493 0.454974 34.5536 0.275066 34.9048C0.0951578 35.2561 0.000929814 35.6444 0 36.0386C0 36.8712 0.411788 37.6042 1.03846 38.0624L1.02521 38.0849L9.85166 43.1496L4.77106 51.8958L4.7881 51.9052C4.62791 52.2657 4.55533 52.6587 4.57622 53.0522C4.5971 53.4458 4.71087 53.829 4.90832 54.1708C5.1077 54.512 5.38515 54.8017 5.71819 55.0165C6.05123 55.2313 6.4305 55.3651 6.82526 55.4071V55.4325H17.0177V65.5335H17.0385C17.1256 66.3012 17.5582 67.0201 18.2824 67.4359C18.6269 67.6325 19.0132 67.7455 19.4099 67.766C19.8066 67.7864 20.2026 67.7136 20.5657 67.5535L20.578 67.5751L29.5531 62.4249L34.5229 70.9811L34.5409 70.9707C34.775 71.2889 35.0811 71.5478 35.4345 71.7266C35.7879 71.9054 36.1787 71.9991 36.5753 72C37.413 72 38.1505 71.5907 38.6115 70.9688L38.6333 70.9811L43.6855 62.2838L52.386 67.276L52.3964 67.2581C52.7592 67.4173 53.1545 67.4894 53.5505 67.4687C53.9465 67.4479 54.332 67.3348 54.6759 67.1386C55.0199 66.9411 55.312 66.6656 55.5284 66.3344C55.7447 66.0033 55.8792 65.626 55.9208 65.2334H55.9463V55.1916H65.993V55.1718C66.3872 55.1295 66.7659 54.9955 67.0985 54.7807C67.431 54.5659 67.708 54.2764 67.9071 53.9356C68.1047 53.5935 68.2185 53.2099 68.2392 52.816C68.2599 52.422 68.187 52.0288 68.0264 51.6681L68.0481 51.6559L63.0821 43.1063L71.9748 38.0031L71.9644 37.9852C72.2846 37.7525 72.5452 37.4481 72.7252 37.0967C72.9051 36.7452 72.9992 36.3567 73 35.9624ZM24.7016 50.2982C22.5906 51.51 20.6765 51.6756 19.0492 51.2409L19.2773 48.7034C20.5099 49.0581 22.1031 49.0563 23.6082 48.1916C24.9023 47.4493 25.1777 46.531 24.8095 45.8978C23.7123 44.0105 18.1906 48.9368 15.8174 44.8525C14.7685 43.0461 15.47 40.646 18.042 39.1707C19.7772 38.1743 21.5209 37.8695 23.1784 38.2411L22.8859 40.709C21.5294 40.4042 20.1331 40.7052 19.0199 41.3431C18.0372 41.9076 17.7258 42.65 18.1045 43.302C19.0975 45.0106 24.6978 40.2574 27.0511 44.3078C28.2051 46.292 27.6343 48.6169 24.7016 50.2982ZM37.9006 42.4646L36.1455 41.0204L31.4625 43.7075L31.8421 45.9411L29.2057 47.453L27.1089 34.1841L30.0236 32.5122L40.5369 40.9527L37.9006 42.4646ZM41.4533 40.4267L35.1477 29.5711L37.4897 28.2266L42.6139 37.0472L47.2316 34.3977L48.4139 36.4328L41.4533 40.4267ZM49.9844 35.5315L43.6788 24.6768L51.4072 20.2407L52.5886 22.2748L47.1861 25.3758L48.5095 27.6546L53.7974 24.6194L54.9789 26.6535L49.6909 29.6878L51.1279 32.1622L56.5313 29.0612L57.7137 31.0953L49.9844 35.5315Z"
              fill="#7C8761"
            />
          </svg>
        </span>
      </div>
      <div className={styles.offerContent}>
        <p>{t("offer")}</p>
        <h1>{t("offer-desc")}</h1>
        <a href="/">
          <span>{t("offer-grab")}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="16"
            viewBox="0 0 29 16"
            fill="none"
          >
            <path
              d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Offer;
