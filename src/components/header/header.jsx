import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./header.module.css";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import CustomAlert from "./CustomAlert";
import SubHeader from "./subheader/SubHeader";
import BurgerIcon from "./subheader/BurgerIcon";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { getToken, logout, removeToken } from "../../authService";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const authPaths = ["/signup", "/login", "/verification", "/welcome"];
  const isAuth = authPaths.includes(location.pathname);

  const { t, i18n } = useTranslation();

  // Contexts
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { changeDirection } = useContext(DirectionContext);

  // State
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || i18n.language
  );
  const [hasConfirmed, setHasConfirmed] = useState(
    localStorage.getItem("hasConfirmed") === "true"
  );
  const [showAlert, setShowAlert] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!getToken()) {
      navigate("/login");
    } else
      try {
        const response = await logout();

        if (response?.success) {
          setResponseMessage("User information sent successfully!");
          setError(null);
          removeToken("token");
          navigate("/login");
        }
        //  else {
        //   setError("Failed to send user information. Please try again.");
        //   setResponseMessage("");
        // }
      } catch (error) {
        // setError("An error occurred while sending user information.");
        // setResponseMessage("");
      }
  };

  // Effect to handle language and direction changes
  useEffect(() => {
    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    i18n.changeLanguage(language);
    changeDirection(language);
  }, [language, i18n, changeDirection]);

  // Handler for language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    // Show alert if confirmation hasn't been made
    if (!hasConfirmed) {
      setShowAlert(true);
    } else {
      localStorage.setItem("lang", selectedLanguage);
    }
  };

  // Handler for toggling dark mode
  const handleToggleDarkMode = () => {
    toggleDarkMode();

    // Show alert if confirmation hasn't been made
    if (!hasConfirmed) {
      setShowAlert(true);
    } else {
      localStorage.setItem("darkMode", !darkMode ? "true" : "false");
    }
  };

  // Handler for confirming alert
  const handleAlertConfirm = () => {
    localStorage.setItem("lang", language);
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
    localStorage.setItem("hasConfirmed", "true");
    setHasConfirmed(true);
    setShowAlert(false);
  };

  // Handler for canceling alert
  const handleAlertCancel = () => {
    const storedLang = localStorage.getItem("lang") || i18n.language;
    setLanguage(storedLang);
    setShowAlert(false);
  };
  return (
    <div className={styles.headerContanier}>
      {!isAuth && <BurgerIcon />}

      <div className={styles.logo}>{t("logo")}</div>

      {!isAuth && <SubHeader />}

      <div className={styles.langAndMode}>
        <div>
          <select
            name=""
            id="language"
            className={`${darkMode ? styles.darkModeSelection : ""}`}
            onChange={handleLanguageChange}
            value={language}
          >
            <option value="en">{t("en")}</option>
            <option value="ar">{t("ar")}</option>
            <option value="fr">{t("fr")}</option>
            <option value="de">{t("de")}</option>
          </select>
        </div>

        <div className={`${styles.container} `} onClick={handleToggleDarkMode}>
          {darkMode ? (
            <FaMoon className={styles.icon} />
          ) : (
            <FaSun className={styles.icon} />
          )}
        </div>

        {!isAuth && (
          <button onClick={handleSubmit} className={styles.logout}>
            {t("logout")}
          </button>
        )}
      </div>
      {showAlert && (
        <CustomAlert
          message={`${t("alert")}`}
          onConfirm={handleAlertConfirm}
          onCancel={handleAlertCancel}
        />
      )}
    </div>
  );
}
