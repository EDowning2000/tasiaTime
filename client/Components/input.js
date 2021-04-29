import styles from "../styles/Input.module.css";

export default function Input({ playerNumber, playerOnChange, inputType }) {
  return (
    <div className={styles.inputMainContainer}>
      <input
        type={inputType}
        placeholder={playerNumber}
        className={styles.playerInput}
        onChange={playerOnChange}
      ></input>
    </div>
  );
}
