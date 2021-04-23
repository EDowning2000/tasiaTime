import styles from "../styles/Input.module.css";

export default function Input({ playerNumber, playerOnChange }) {
  return (
    <div className={styles.inputMainContainer}>
      <input
        type="text"
        placeholder={"Player " + playerNumber}
        className={styles.playerInput}
        onChange={playerOnChange}
      ></input>
    </div>
  );
}
