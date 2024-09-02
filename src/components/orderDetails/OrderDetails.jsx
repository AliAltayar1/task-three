import Header from "../header/header";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import OrderDetailsContent from "./orderDetailsContent/OrderDetailContent";
import Footer from "../footer/Footer";
import { getToken } from "../../authService";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
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
          <OrderDetailsContent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
