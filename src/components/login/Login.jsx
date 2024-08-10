import styles from "./Login.module.css";
import Header from "../header/header";
import LoginForm from "./login-form/LoginForm";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";
import { DirectionContext } from "../../DirectionContext";

const Login = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      <div className={`${styles.contanier} ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <div className={`${isArabic ? "arbic-direction" : ""} ${styles.login}`}>
          <LoginForm></LoginForm>
          <div className={styles.imgContanier}>
            <img
              src={`${process.env.PUBLIC_URL}/Rectangle16.png`}
              alt="login-photo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
