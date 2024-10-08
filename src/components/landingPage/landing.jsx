import About from "../aboutUs/AboutUs";
import Contact from "../contact/Contact";
import Header from "../header/header";
import Home from "../homePage/Home";
import OurServices from "../ourServices/OurServices";
import Products from "../productsPage/ProductsPage";
import Offer from "../offer/Offer";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";
import Footer from "../footer/Footer";
import styles from "./landing.module.css";
import { useEffect } from "react";
import { getToken } from "../../authService";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div
        className={` ${styles.landingContanier} contanier ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <Header />
        <Home />
        <About />
        <Offer />
        <OurServices />
        <Products />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
