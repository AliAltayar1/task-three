import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <div className={styles.loginform}>
        <h1>LOGIN</h1>
        <div className={styles.inputs}>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
        </div>
        <Link to="/welcome" className={styles.loginRoute}>
          <button>login</button>
        </Link>
        <div className={styles.help}>
          <div>
            <a href="/">Forget Password</a>
          </div>
          <div>
            <p>don't have an account </p>
            <Link to="/signup" className={styles.singup}>
              signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
