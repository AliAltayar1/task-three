import { useState } from "react";
import styles from "./SubHeader.module.css";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

const SubHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.subHeaderContainer}>
        <div className={`${styles.route}`}>
          <Link to={"/landing#home"}>{t("home")}</Link>
          <Link to={"/landing#products"}>{t("products")}</Link>
          <Link to={"/landing#aboutUs"}>{t("aboutUs")} </Link>
          <Link to={"/landing#services"}>{t("services")}</Link>
          <Link to={"/landing#contactUs"}>{t("contactUs")}</Link>
        </div>
        <div className={styles.icons}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="search"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                transform="translate(2 2)"
                class="colorStroke200e32 svgStroke"
              >
                <circle
                  cx="9.767"
                  cy="9.767"
                  r="8.989"
                  fill="none"
                  class="color000000 svgShape"
                ></circle>
                <line x1="16.018" x2="19.542" y1="16.485" y2="20"></line>
              </g>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="Heart"
            >
              <path
                fill="none"
                stroke="#ffffff"
                d="M5.047 2.506c-2.114 0-3.533 1.711-3.533 3.824 0 2.398 3.35 5.263 6.22 7.176 2.871-1.913 6.182-4.824 6.221-7.176.035-2.113-1.333-3.824-3.447-3.824-.902 0-1.817.477-2.774 1.433-.957-.956-1.785-1.433-2.687-1.433z"
                class="colorStroke000000 svgStroke"
              ></path>
            </svg>
          </span>
          <span>
            <Link to={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="Cart"
              >
                <path
                  d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
                <path
                  d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
                <path
                  d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z"
                  fill="#ffffff"
                  class="color000000 svgShape"
                ></path>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
