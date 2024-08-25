import styles from "./ProductsDetailsContent.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

const ProductsDetailsContent = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.productsContent}>
      <div className={`${styles.filter} ${isActive ? styles.active : ""}`}>
        <div>
          <span>{t("filter")}</span>
          <span onClick={() => setIsActive(false)}>X</span>
        </div>
        <div>
          <span>{t("name")}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="16"
              viewBox="0 0 29 16"
            >
              <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" />
            </svg>
          </span>
        </div>
        <div>
          <span>{t("category")}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="16"
              viewBox="0 0 29 16"
            >
              <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" />
            </svg>
          </span>
        </div>
        <div>
          <span>{t("price")}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="16"
              viewBox="0 0 29 16"
            >
              <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" />
            </svg>
          </span>
        </div>
        <div>
          <span>{t("color")}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="16"
              viewBox="0 0 29 16"
            >
              <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" />
            </svg>
          </span>
        </div>
      </div>

      <div className={styles.btns}>
        <button onClick={() => setIsActive(true)}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                d="M26.5625 15.4999H11.1188M5.6675 15.4999H3.4375M5.6675 15.4999C5.6675 14.7771 5.9546 14.084 6.46563 13.573C6.97667 13.062 7.66979 12.7749 8.3925 12.7749C9.11522 12.7749 9.80833 13.062 10.3194 13.573C10.8304 14.084 11.1175 14.7771 11.1175 15.4999C11.1175 16.2226 10.8304 16.9157 10.3194 17.4267C9.80833 17.9378 9.11522 18.2249 8.3925 18.2249C7.66979 18.2249 6.97667 17.9378 6.46563 17.4267C5.9546 16.9157 5.6675 16.2226 5.6675 15.4999ZM26.5625 23.7586H19.3775M19.3775 23.7586C19.3775 24.4815 19.0897 25.1754 18.5786 25.6865C18.0674 26.1977 17.3741 26.4849 16.6513 26.4849C15.9285 26.4849 15.2354 26.1965 14.7244 25.6855C14.2133 25.1744 13.9262 24.4813 13.9262 23.7586M19.3775 23.7586C19.3775 23.0357 19.0897 22.3431 18.5786 21.8319C18.0674 21.3208 17.3741 21.0336 16.6513 21.0336C15.9285 21.0336 15.2354 21.3207 14.7244 21.8317C14.2133 22.3428 13.9262 23.0359 13.9262 23.7586M13.9262 23.7586H3.4375M26.5625 7.24111H22.6813M17.23 7.24111H3.4375M17.23 7.24111C17.23 6.5184 17.5171 5.82528 18.0281 5.31425C18.5392 4.80321 19.2323 4.51611 19.955 4.51611C20.3129 4.51611 20.6672 4.5866 20.9978 4.72354C21.3284 4.86049 21.6288 5.06121 21.8819 5.31425C22.1349 5.56729 22.3356 5.86769 22.4726 6.1983C22.6095 6.52891 22.68 6.88326 22.68 7.24111C22.68 7.59897 22.6095 7.95331 22.4726 8.28393C22.3356 8.61454 22.1349 8.91494 21.8819 9.16798C21.6288 9.42102 21.3284 9.62174 20.9978 9.75869C20.6672 9.89563 20.3129 9.96611 19.955 9.96611C19.2323 9.96611 18.5392 9.67902 18.0281 9.16798C17.5171 8.65694 17.23 7.96383 17.23 7.24111Z"
                stroke="#1A5319"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span>{t("filter")}</span>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
          >
            <path
              d="M0.93934 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807613 11.0711 0.807613 10.4853 1.3934L0.93934 10.9393ZM27 10.5L2 10.5L2 13.5L27 13.5L27 10.5Z"
              fill="#D6EFD8"
            />
          </svg>
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.imgContanier}>
          <img
            src={`${process.env.PUBLIC_URL}/productsDetails.jpeg`}
            alt="plant"
          />
          <div className={styles.rate}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>{t("review")}</span>
          </div>
        </div>

        <div>
          <h2>{t("plantName")}</h2>
          <div className={styles.description}>
            <p>{t("plantDesc")}</p>
            <div className={styles.specifications}>
              <div>
                <span>{t("size")}</span>
                <span>{t("sizeVal")}</span>
              </div>
              <div>
                <span>{t("height")}</span>
                <span>12.5cm</span>
              </div>
              <div>
                <span>{t("category")}</span>
                <span>{t("green plants")}</span>
              </div>
              <div>
                <span>{t("color")}</span>
                <span>{t("green")}</span>
              </div>
            </div>
          </div>

          <div className={styles.quantity}>
            <span>{t("quintity")}</span>
            <button>+</button>
            <span>1</span>
            <button>-</button>
            <span>{t("price")} : 30.00$</span>
          </div>

          <div className={styles.buyAndCartbtns}>
            <button>
              <Link to={"/checkout"}>{t("buyNow")}</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="30"
                  viewBox="0 0 28 30"
                  fill="none"
                >
                  <path
                    d="M7.33333 13.6667V7.33333C7.33333 3.83553 10.1689 1 13.6667 1C17.1645 1 20 3.83553 20 7.33333V13.6667M7.33333 8.91667H20C24.75 8.91667 26.3333 15.0757 26.3333 17.625C26.3333 27.166 23.7946 28.7083 13.6667 28.7083C3.53869 28.7083 1 27.166 1 17.625C1 15.0757 2.58333 8.91667 7.33333 8.91667Z"
                    stroke="#7C8761"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
            <button>
              <Link to={"/cart"}>{t("addCart")}</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                >
                  <path
                    d="M4.28571 3.75838H24L21.5357 12.7231H6.75M21.5357 15.4815H7.57143L3.46429 1H1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.8929 19.6187C20.8002 19.6187 21.5357 19.0012 21.5357 18.2395C21.5357 17.4778 20.8002 16.8604 19.8929 16.8604C18.9855 16.8604 18.25 17.4778 18.25 18.2395C18.25 19.0012 18.9855 19.6187 19.8929 19.6187Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.21409 19.6187C10.1214 19.6187 10.8569 19.0012 10.8569 18.2395C10.8569 17.4778 10.1214 16.8604 9.21409 16.8604C8.30676 16.8604 7.57123 17.4778 7.57123 18.2395C7.57123 19.0012 8.30676 19.6187 9.21409 19.6187Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ProductsDetailsContent;
