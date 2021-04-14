import Link from "next/link";
import styles from "../styles/Button.module.css";
import arrow from "../Images/routerArrow.png";
//this component will only be used on the index page as there is nowhere back you can go

export default function ButtonForwardOnly({ text, routeNext }) {
  return (
    <>
      <div className={styles.mainContainer}>
        {" "}
        <span className={styles.arrowBack}></span>
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
        <Link href={routeNext}>
          <img
            src={arrow}
            alt="navigate forward"
            className={styles.arrowForward}
          />
        </Link>
      </div>
    </>
  );
}
