import styles from "./Signup.module.css";
import Header from "../header/header";
import SingupForm from "./signup-form/SignupForm";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";
import { DirectionContext } from "../../DirectionContext";

const Singup = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);

  return (
    <>
      <div className={`${styles.contanier} ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <div
          className={`${isArabic ? "arbic-direction" : ""} ${styles.signup}`}
        >
          <div className={styles.imgContanier}>
            <img
              src={`${process.env.PUBLIC_URL}/Rectangle16.png`}
              alt="login-photo"
            />
          </div>
          <SingupForm></SingupForm>
        </div>
      </div>
    </>
  );
};

export default Singup;
