import Header from "../header/header";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import ProductsContent from "../productsPage/productsContent/ProductsContent";
import SpecialPlants from "./specialPlants/SpecialPlants";
import styles from "./OfferPage.module.css";
import Stars from "../stars/Stars";
import Footer from "../footer/Footer";
import { getToken } from "../../authService";
import { useNavigate } from "react-router-dom";

const OfferPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div
        className={`${styles.offerPage} contanier ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <Header />
        <div
          className={`${styles.contentContanier} ${
            isArabic ? "arbic-direction" : ""
          }  content-contanier`}
        >
          <SpecialPlants />
          <ProductsContent />
          <Stars />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OfferPage;
