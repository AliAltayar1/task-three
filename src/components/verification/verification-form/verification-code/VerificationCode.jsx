import { useState, useRef, useContext } from "react";
import styles from "../VerificationForm.module.css";
import { resendVerifyCode, verifyCode } from "../../../../authService";
import { EmailContext } from "../../../../EmailContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VerificationCodeInput = () => {
  const { email } = useContext(EmailContext); // Access the email
  const navigate = useNavigate();
  const { t } = useTranslation();

  const inputRefs = useRef([]);
  const [codes, setCodes] = useState(new Array(6).fill(""));
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e, index) => {
    const value = e.target.value; //1 0
    if (value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const verificationCode = codes.join(""); // Combine codes into a single string

    const formData = new FormData();
    formData.append("email", email);
    formData.append("verification_code", verificationCode);

    try {
      const res = await verifyCode(formData);
      if (res?.success) {
        navigate("/login");
        setResponseMessage(res.message);
        setError(null);
      } else {
        setResponseMessage("");
        setError(res.message[0]);
      }
    } catch (error) {
      setResponseMessage("");
      setError(error.message);
    }
  };

  const handleResendCode = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    try {
      const res = await resendVerifyCode(formData);
      if (res.success) {
        setResponseMessage(res.message);
        setError(null);
      } else {
        setResponseMessage("");
        setError(res.message[0]);
      }
    } catch (error) {
      setResponseMessage("");
      setError(error.message);
    }
  };

  return (
    <div className={styles.code}>
      <form onSubmit={handleSubmit}>
        <div>
          {codes.map((code, index) => (
            <input
              key={index}
              type="text"
              value={code}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => handleFocus(index)}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength="1"
            />
          ))}
        </div>

        <div className="responseAndErrorMsg">
          {/* Display success or error messages */}
          {responseMessage && (
            <p style={{ color: "white" }}>{responseMessage}</p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <div>
          <button>{t("verify")}</button>
          <button onClick={handleResendCode}>{"resend the code"}</button>
        </div>
      </form>
    </div>
  );
};

export default VerificationCodeInput;
