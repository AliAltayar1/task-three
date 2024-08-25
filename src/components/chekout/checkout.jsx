import Header from "../header/header";
import { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import Stars from "../stars/Stars";
import CheckoutContent from "./checkoutContent/CheckoutContent";
import Footer from "../footer/Footer";

const Checkout = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      <div className={` contanier ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <div
          className={`${isArabic ? "arbic-direction" : ""}  content-contanier`}
        >
          <CheckoutContent />
        </div>
        <Stars />
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
