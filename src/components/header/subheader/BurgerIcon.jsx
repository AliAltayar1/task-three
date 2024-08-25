import styles from "./SubHeader.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const BurgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={styles.burgerIcon}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.route} ${isOpen ? styles.open : ""}`}>
          <Link to={"/landing#home"}>{t("home")}</Link>
          <Link to={"/landing#products"}>{t("products")}</Link>
          <Link to={"/landing#aboutUs"}>{t("aboutUs")} </Link>
          <Link to={"/landing#services"}>{t("services")}</Link>
          <Link to={"/landing#contactUs"}>{t("contactUs")}</Link>
        </div>
      </div>
    </>
  );
};

export default BurgerIcon;
