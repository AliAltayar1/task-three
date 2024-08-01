import styles from "./WelcomeBox.module.css";
import { Link } from "react-router-dom";

const WelcomeBox = () => {
  return (
    <>
      <div className={styles.welcomebox}>
        <Link to="/login">
          <button>logout</button>
        </Link>
        <p>Welcome to our store</p>
        <div className={styles.imgContanier}>
          <div className={styles.img}>
            <img src="/plant2.png" alt="plant2" />
          </div>
          <div className={styles.img}>
            <img src="/plant1.png" alt="plant1" />
          </div>
          <div className={styles.img}>
            <img src="/plant3.png" alt="plant3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBox;
