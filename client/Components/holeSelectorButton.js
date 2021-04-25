import styles from "../styles/Button.module.css";
import arrow from "../Images/routerArrow.png";

export default function HoleSelectorButton({
  text,
  holeSelectorForward,
  holeSelectorBack,
}) {
  return (
    <>
      <div className={styles.mainContainer}>
        {" "}
        <div onClick={holeSelectorBack}>
          <img
            src={arrow}
            alt="navigate forward"
            className={styles.arrowBack}
          />
        </div>
        <div className={styles.secondaryContainer}>
          <div className={styles.stripeContainer}>
            <h3 className={styles.buttonText}>{text}</h3>
            <div className={styles.lightGreenStripeFirst}></div>
            <div className={styles.darkGreenStripe}></div>
            <div className={styles.lightGreenStripe}></div>
            <div className={styles.darkGreenStripe}></div>
            <div className={styles.lightGreenStripeLast}></div>
          </div>
        </div>
        <div onClick={holeSelectorForward}>
          <img
            src={arrow}
            alt="navigate forward"
            className={styles.arrowForward}
          />
        </div>
      </div>
    </>
  );
}
