import styles from "../styles/Button.module.css";
import arrow from "../Images/arrow.png";
export default function Button() {
  return (
    <>
      <div className={styles.mainContainer}>
        {" "}
        <img src={arrow} alt="navigate forward" className={styles.arrowBack} />
        <div className={styles.secondaryContainer}>
          <div className={styles.stripeContainer}>
            <div className={styles.lightGreenStripeFirst}></div>
            <div className={styles.darkGreenStripe}></div>
            <div className={styles.lightGreenStripe}></div>
            <div className={styles.darkGreenStripe}></div>
            <div className={styles.lightGreenStripeLast}></div>
          </div>
        </div>
        <img
          src={arrow}
          alt="navigate forward"
          className={styles.arrowForward}
        />
      </div>
    </>
  );
}
