import styles from "./Products.module.css";
import Header from "../header/header";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext, useState } from "react";
import { DirectionContext } from "../../DirectionContext";
import Stars from "../stars/Stars";
import ProductsContent from "./productsContent/ProductsContent";

const Products = () => {
  const [navigate, setNavigate] = useState(1);

  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      <div
        id="products"
        className={` ${styles.product}`}
        style={{ position: "relative" }}
      >
        {/* <Header /> */}
        <div
          className={`${isArabic ? "arbic-direction" : ""}  ${
            styles.contentContanier
          }`}
        >
          {/* <h1>our products</h1> */}
          <ProductsContent />

          <div className={styles.navigateDots}>
            <div
              className={navigate === 1 ? styles.active : ""}
              onClick={() => setNavigate(1)}
            ></div>
            <div
              className={navigate === 2 ? styles.active : ""}
              onClick={() => setNavigate(2)}
            ></div>
            <div
              className={navigate === 3 ? styles.active : ""}
              onClick={() => setNavigate(3)}
            ></div>
          </div>
        </div>
        <Stars />
      </div>
    </>
  );
};

export default Products;
