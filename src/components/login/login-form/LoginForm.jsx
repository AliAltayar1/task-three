import { Link } from "react-router-dom";
import styles1 from "./LoginForm.module.css";
import styles2 from "../../../component.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { login } from "../../../authService";
import TwoFactorAuthentication from "../2FA/TwoFactorAuthentication";

const LoginForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [responseSuccess, setResponseSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("identifier", formData.identifier);
    formDataToSend.append("password", formData.password);

    try {
      const response = await login(formDataToSend);
      if (response?.success) {
        setResponseSuccess(true);
        setResponseMessage(response["statue message "]);
        setError(null);
      } else {
        setResponseSuccess(false);
        setError(response.message[0]);
        setResponseMessage("");
      }
    } catch (error) {
      setError(error.message);
      setResponseMessage("");
    }
  };

  return (
    <>
      <div className={`${styles1.loginform} ${styles2.formContanier}`}>
        <h1>{t("login")}</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className={styles2.inputs}>
            <input
              type="email"
              name="identifier"
              onChange={handleChange}
              value={formData.email}
              placeholder={t("email")}
            />
            <input type="text" placeholder={t("phonNumber")} />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder={t("pass")}
            />
          </div>

          <div className="responseAndErrorMsg">
            {/* Display success or error messages */}
            {responseMessage && (
              <p style={{ color: "white" }}>{responseMessage}</p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <button>{t("login")}</button>
        </form>
        <div className={styles1.help}>
          <div>
            <a href="/">{t("fogetPass")}</a>
          </div>
          <div>
            <p>{t("dontHvANAcc")} </p>
            <Link to="/signup" className={styles1.singup}>
              {t("signup")}
            </Link>
          </div>
        </div>
      </div>
      <TwoFactorAuthentication
        emailProp={formData.identifier}
        isShow={responseSuccess}
        setIsShow={setResponseSuccess}
      />
    </>
  );
};

export default LoginForm;
