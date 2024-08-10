import styles from "./header.module.css";

export default function CustomAlert({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.alert}>
      <p>{message}</p>
      <div>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
}
