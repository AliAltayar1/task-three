import styles from "./AboutUs.module.css";
import Header from "../header/header";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";
import { DirectionContext } from "../../DirectionContext";
import Stars from "../stars/Stars";
import AboutUsContent from "./aboutUsContent/AboutUsContent";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      {/* <div className={` contanier ${darkMode ? "dark-mode" : ""}`}> */}
      {/* <Header /> */}
      <div id="aboutUs" style={{ position: "relative" }}>
        <div
          className={`${isArabic ? "arbic-direction" : ""}  content-contanier`}
        >
          <AboutUsContent />
        </div>
        <Stars />
      </div>
      {/* </div> */}
    </>
  );
};

export default About;
