import styles from "./Signup.module.css";
import SingupForm from "./signup-form/SignupForm";

const Singup = () => {
  return (
    <>
      <div className={styles.contanier}>
        <div className={styles.logo}>logo</div>
        <div className={styles.signup}>
          <div className={styles.imgContanier}>
            <img src="/Rectangle16.png" alt="login-photo" />
          </div>
          <SingupForm></SingupForm>
        </div>
      </div>
    </>
  );
};

export default Singup;
