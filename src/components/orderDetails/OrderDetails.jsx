import Header from "../header/header";
import { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import OrderDetailsContent from "./orderDetailsContent/OrderDetailContent";
import Footer from "../footer/Footer";

const OrderDetails = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
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
