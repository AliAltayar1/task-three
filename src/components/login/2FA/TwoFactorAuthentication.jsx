import styles1 from "./TwoFactorAuthentication.module.css";
import styles2 from "../../../component.module.css";
import { useState } from "react";
import {
  getToken,
  logout,
  refreshAuthToken,
  resendTwoFactorAuth,
  setToken,
  twoFactorAuth,
} from "../../../authService";
import { useNavigate } from "react-router-dom";

const TwoFactorAuthentication = ({ emailProp, isShow, setIsShow }) => {
  const navigate = useNavigate(); // Get the navigate function

  const email = emailProp;
  const [formData, setFormData] = useState({
    TwoFactorAuth: "", // Ensure this key matches exactly with the input name
  });

  const [responseSuccess, setResponseSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure the state is updated correctly
    setFormData((prevState) => ({
      ...prevState, // Keep the existing state
      [name]: value, // Update the field that matches the input name
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData and append email and verification code
    const formDataToSend = new FormData();
    formDataToSend.append("email", email);
    formDataToSend.append("TwoFactorAuth", formData.TwoFactorAuth);

    try {
      const response = await twoFactorAuth(formDataToSend);
      if (response?.success) {
        navigate("/landing");
        setResponseMessage(response.message);
        setError(null);
        const token = response.access_token;

        setToken(token);
      } else {
        setError(response.message[0]);
        setResponseMessage("");
      }
    } catch (error) {
      setError(error.message);
      setResponseMessage("");
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    // Create FormData and append email and verification code
    const formDataToSend = new FormData();
    formDataToSend.append("email", email);

    try {
      const response = await resendTwoFactorAuth(formDataToSend);
      if (response?.success) {
        setResponseMessage(response["statue message "]);
        setError(null);
      } else {
        setError(response.message[0]);
        setResponseMessage("");
      }
    } catch (error) {
      setError(error.message);
      setResponseMessage("");
    }
  };

  return (
    <div className={`${styles1.twoFactorAuth} ${isShow ? styles1.show : ""}`}>
      <span
        onClick={() => {
          setIsShow(false);
        }}
      >
        X
      </span>
      <form onSubmit={handleSubmit}>
        <h1>Enter your Two-Factor Authentication code please</h1>
        <div className={styles2.inputs}>
          <input
            type="text"
            name="TwoFactorAuth" // Ensure this matches the state key exactly
            onChange={handleChange}
            value={formData.TwoFactorAuth} // Ensure correct value binding
            placeholder="2FA code"
          />
        </div>

        <div className="responseAndErrorMsg">
          {/* Display success or error messages */}
          {responseMessage && (
            <p style={{ color: "white" }}>{responseMessage}test</p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <button type="submit">Send</button>
        <button onClick={handleResend}>Resend</button>
      </form>
    </div>
  );
};

export default TwoFactorAuthentication;
