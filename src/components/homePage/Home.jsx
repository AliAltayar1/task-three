import styles from "./Home.module.css";
import Header from "../header/header";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";
import { DirectionContext } from "../../DirectionContext";
import HomePgContnet from "./homePageContent/HomePageContent";
import Stars from "../starsWIthBlur/Stars";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      <div id="home" className={` ${styles.home}`}>
        {/* <Header /> */}
        <div
          className={`${isArabic ? "arbic-direction" : ""}  content-contanier`}
        >
          <HomePgContnet />
          <div className={` imgContanier ${styles.imgContanier}`}>
            <img src={`${process.env.PUBLIC_URL}/home.png`} alt="login-photo" />
          </div>
        </div>
        <Stars />
      </div>
    </>
  );
};

export default Home;
