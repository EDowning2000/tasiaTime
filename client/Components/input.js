import styles from "../styles/Input.module.css";

export default function Input({ playerNumber, playerOnclick }) {
  return (
    <div className={styles.inputMainContainer}>
      <input
        type="text"
        placeholder={"Player " + playerNumber}
        className={styles.playerInput}
        onClick={playerOnclick}
      ></input>
    </div>
  );
}
