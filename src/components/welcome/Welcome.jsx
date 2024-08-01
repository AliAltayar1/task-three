import styles from "./Welcome.module.css";
import WelcomeBox from "./welcome-box/WelcomeBox";

const Login = () => {
  return (
    <>
      <div className={styles.contanier}>
        <div className={styles.logo}>logo</div>
        <div className={styles.welcome}>
          <WelcomeBox></WelcomeBox>
        </div>
      </div>
    </>
  );
};

export default Login;
