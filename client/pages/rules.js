import styles from "../styles/Rules.module.css";

export default function Rules() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <h1 className={styles.rulesOfPlay}>RULES OF PLAY</h1>
        <div className={styles.individualRulesContainer}>
          <h4 className={styles.individualRule}>TEE OFF</h4>
          <h4 className={styles.individualRule}>MAXIMUM GROUP SIZE</h4>
          <h4 className={styles.individualRule}>OUT-OF-BOUNDS</h4>
          <h4 className={styles.individualRule}>SAFETY</h4>
        </div>
      </div>
    </div>
  );
}
