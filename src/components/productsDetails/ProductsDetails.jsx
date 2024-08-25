import Header from "../header/header";
import { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import ProductsDetailsContent from "./productsDetailsContent/ProductsDetailsContent";
import ProductsContent from "../productsPage/productsContent/ProductsContent";
import Offer from "../offer/Offer";
import Stars from "../stars/Stars";
import styles from "./ProductsDetails.module.css";
import Frame from "../frame/frame";
import Footer from "../footer/Footer";

const ProductsDetails = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      <div className={` contanier ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <div
          className={` ${styles.productsDetails} ${
            isArabic ? "arbic-direction" : ""
          }  content-contanier`}
        >
          <Frame />
          <ProductsDetailsContent />
          <ProductsContent />
          <Offer />
          <Stars />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsDetails;
