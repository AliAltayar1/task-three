import styles from "./Login.module.css";
import LoginForm from "./login-form/LoginForm";

const Login = () => {
  return (
    <>
      <div className={styles.contanier}>
        <div className={styles.logo}>logo</div>
        <div className={styles.login}>
          <LoginForm></LoginForm>
          <div className={styles.imgContanier}>
            <img src="/Rectangle16.png" alt="login-photo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
