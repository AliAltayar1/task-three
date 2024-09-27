import styles from "./confirmationPopup.module.css";

const ConfirmationPopup = ({ setIsConfirmDel, setShowConfirmDelete }) => {
  return (
    <div className={styles.popupContainer}>
      <p className={styles.popupMessage}>
        Are you sure you want to delete this product?
      </p>

      <div className={styles.buttonContainer}>
        <button
          className={styles.confirmButton}
          onClick={() => {
            setIsConfirmDel(true);
            setShowConfirmDelete(false);
          }}
        >
          Yes
        </button>
        <button
          className={styles.cancelButton}
          onClick={() => {
            setIsConfirmDel(false);
            setShowConfirmDelete(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
