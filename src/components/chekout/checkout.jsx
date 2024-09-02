import Header from "../header/header";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import Stars from "../stars/Stars";
import CheckoutContent from "./checkoutContent/CheckoutContent";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../authService";

const Checkout = () => {
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
