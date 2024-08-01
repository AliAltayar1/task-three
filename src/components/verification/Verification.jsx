import styles from "./Verification.module.css";
import LoginForm from "./verification-form/VerificationForm";

const Verification = () => {
  return (
    <>
      <div className={styles.contanier}>
        <div className={styles.logo}>logo</div>
        <div className={styles.login}>
          <div className={styles.imgContanier}>
            <img src="/Rectangle16.png" alt="login-photo" />
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
};

export default Verification;
