import styles from "./header.module.css";
import { useTranslation } from "react-i18next";

export default function CustomAlert({ message, onConfirm, onCancel }) {
  const { t } = useTranslation();

  return (
    <div className={styles.alert}>
      <p>{message}</p>
      <div>
        <button onClick={onConfirm}>{t("yes")}</button>
        <button onClick={onCancel}>{t("no")}</button>
      </div>
    </div>
  );
}
