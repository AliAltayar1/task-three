import styles from "./ProductsContent.module.css";
import { useTranslation } from "react-i18next";

const ProductsContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.productContentContanier}>
        <h1>{t("products-head")}</h1>

        <div>
          <div>
            <div className={styles.imgContanier}>
              <img src={`${process.env.PUBLIC_URL}/plant4.png`} alt="plant 4" />
              <a href="/">{t("seeMore")}</a>
            </div>
            <p>{t("plantName")}</p>
            <div className={styles.price}>30.00$</div>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 4">
                  <circle
                    id="Ellipse 3"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#D9D9D9"
                  />
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M12 14.5185H30L27.75 22.7037H14.25M27.75 25.2222H15L11.25 12H9"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M26.25 29C27.0784 29 27.75 28.4362 27.75 27.7408C27.75 27.0453 27.0784 26.4815 26.25 26.4815C25.4216 26.4815 24.75 27.0453 24.75 27.7408C24.75 28.4362 25.4216 29 26.25 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M16.5 29C17.3284 29 18 28.4362 18 27.7408C18 27.0453 17.3284 26.4815 16.5 26.4815C15.6716 26.4815 15 27.0453 15 27.7408C15 28.4362 15.6716 29 16.5 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div>
            <div className={styles.imgContanier}>
              <img src={`${process.env.PUBLIC_URL}/plant5.png`} alt="plant 4" />
              <a href="/">{t("seeMore")}</a>
            </div>
            <p>{t("plantName2")}</p>
            <div className={styles.price}>50.00$</div>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 4">
                  <circle
                    id="Ellipse 3"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#D9D9D9"
                  />
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M12 14.5185H30L27.75 22.7037H14.25M27.75 25.2222H15L11.25 12H9"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M26.25 29C27.0784 29 27.75 28.4362 27.75 27.7408C27.75 27.0453 27.0784 26.4815 26.25 26.4815C25.4216 26.4815 24.75 27.0453 24.75 27.7408C24.75 28.4362 25.4216 29 26.25 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M16.5 29C17.3284 29 18 28.4362 18 27.7408C18 27.0453 17.3284 26.4815 16.5 26.4815C15.6716 26.4815 15 27.0453 15 27.7408C15 28.4362 15.6716 29 16.5 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div>
            <div className={styles.imgContanier}>
              <img src={`${process.env.PUBLIC_URL}/plant6.png`} alt="plant 4" />
              <a href="/">{t("seeMore")}</a>
            </div>
            <p>{t("plantName3")}</p>
            <div className={styles.price}>20.00$</div>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 4">
                  <circle
                    id="Ellipse 3"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#D9D9D9"
                  />
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M12 14.5185H30L27.75 22.7037H14.25M27.75 25.2222H15L11.25 12H9"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M26.25 29C27.0784 29 27.75 28.4362 27.75 27.7408C27.75 27.0453 27.0784 26.4815 26.25 26.4815C25.4216 26.4815 24.75 27.0453 24.75 27.7408C24.75 28.4362 25.4216 29 26.25 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M16.5 29C17.3284 29 18 28.4362 18 27.7408C18 27.0453 17.3284 26.4815 16.5 26.4815C15.6716 26.4815 15 27.0453 15 27.7408C15 28.4362 15.6716 29 16.5 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div>
            <div className={styles.imgContanier}>
              <img src={`${process.env.PUBLIC_URL}/plant7.png`} alt="plant 4" />
              <a href="/">{t("seeMore")}</a>
            </div>
            <p>{t("plantName4")}</p>
            <div className={styles.price}>40.00$</div>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 4">
                  <circle
                    id="Ellipse 3"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#D9D9D9"
                  />
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M12 14.5185H30L27.75 22.7037H14.25M27.75 25.2222H15L11.25 12H9"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M26.25 29C27.0784 29 27.75 28.4362 27.75 27.7408C27.75 27.0453 27.0784 26.4815 26.25 26.4815C25.4216 26.4815 24.75 27.0453 24.75 27.7408C24.75 28.4362 25.4216 29 26.25 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M16.5 29C17.3284 29 18 28.4362 18 27.7408C18 27.0453 17.3284 26.4815 16.5 26.4815C15.6716 26.4815 15 27.0453 15 27.7408C15 28.4362 15.6716 29 16.5 29Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsContent;
