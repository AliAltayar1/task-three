import styles1 from "./CheckoutContent.module.css";
import styles2 from "../../../component.module.css";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

const CheckoutContent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles1.checkoutContent}>
      <div className={`${styles1.form} ${styles2.inputs}`}>
        <p>{t("chkout-address")}</p>
        <div>
          <input type="text" placeholder={t("fullName")} />
          <input type="email" placeholder={t("email")} />
        </div>
        <div>
          <input type="text" placeholder={t("city")} />
          <input type="text" placeholder={t("address")} />
        </div>
        <p>{t("chkout-paymentDetails")}</p>
        <div>
          <input type="text" placeholder={t("nameOnCard")} />
          <input type="text" placeholder={t("cardNum")} />
        </div>
        <div>
          <Link to={"/cart"}>{t("back")}</Link>

          <Link to={"/cart"}>{t("send")}</Link>
        </div>
      </div>
      <div className={styles1.imgContanier}>
        <img src={`${process.env.PUBLIC_URL}/checkout.png`} alt="plant 4" />
        <div>
          <h2>{t("chkout-location")}</h2>
          <p>{t("chkout-locationDetails")} </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
