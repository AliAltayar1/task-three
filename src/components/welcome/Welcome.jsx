import WelcomeBox from "./welcome-box/WelcomeBox";
import Header from "../header/header";
import { DarkModeContext } from "../../DarkModeContext";
import { useContext } from "react";

const Login = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className={`contanier ${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <div className={`content-contanier`}>
          <WelcomeBox></WelcomeBox>
        </div>
      </div>
    </>
  );
};

export default Login;
