import Header from "../header/header";
import { useContext } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import { DirectionContext } from "../../DirectionContext";
import Stars from "../stars/Stars";
import ContactContent from "./contactContent/ContactContent";

const Contact = () => {
  // const { darkMode } = useContext(DarkModeContext);
  const { isArabic } = useContext(DirectionContext);
  return (
    <>
      {/* <div className={` contanier ${darkMode ? "dark-mode" : ""}`}> */}
      {/* <Header /> */}
      <div id="contactUs" style={{ position: "relative" }}>
        <div
          className={`${isArabic ? "arbic-direction" : ""}  content-contanier`}
        >
          <ContactContent />
        </div>
        <Stars />
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
