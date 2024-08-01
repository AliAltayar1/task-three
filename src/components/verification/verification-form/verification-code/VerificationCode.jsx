import { useState, useRef } from "react";
import styles from "../VerificationForm.module.css";

const VerificationCodeInput = () => {
  const inputRefs = useRef([]);
  const [codes, setCodes] = useState(new Array(6).fill(""));

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

  return (
    <div className={styles.code}>
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
  );
};

export default VerificationCodeInput;
