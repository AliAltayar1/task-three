import styles from "./Welcome.module.css";
import WelcomeBox from "./welcome-box/WelcomeBox";
import Header from "../header/header";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";

const Login = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className={`${styles.contanier} ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <div className={styles.welcome}>
          <WelcomeBox></WelcomeBox>
        </div>
      </div>
    </>
  );
};

export default Login;
