import styles from "./Verification.module.css";
import Header from "../header/header";
import LoginForm from "./verification-form/VerificationForm";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";
import { DirectionContext } from "../../DirectionContext";

const Verification = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      <div className={`${styles.contanier} ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <div className={`${isArabic ? "arbic-direction" : ""} ${styles.login}`}>
          <div className={styles.imgContanier}>
            <img
              src={`${process.env.PUBLIC_URL}/Rectangle16.png`}
              alt="login-photo"
            />
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
};

export default Verification;
