import styles from "../styles/Button.module.css";
export default function Button() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondaryContainer}>
        <div className={styles.stripeContainer}>
          <div className={styles.lightGreenStripeFirst}></div>
          <div className={styles.darkGreenStripe}></div>
          <div className={styles.lightGreenStripe}></div>
          <div className={styles.darkGreenStripe}></div>
          <div className={styles.lightGreenStripeLast}></div>
        </div>
      </div>
    </div>
  );
}
