import styles from "./popupMsg.module.css";

const PopupMsg = ({ Msg, showMsg, setShowMsg }) => {
  return (
    <div
      className={styles.delMsg}
      style={{ display: showMsg ? "flex" : "none" }}
    >
      <div
        onClick={() => {
          setShowMsg(false);
        }}
      >
        X
      </div>
      <div>{Msg} </div>
    </div>
  );
};

export default PopupMsg;
