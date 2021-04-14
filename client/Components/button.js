import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css";
import arrow from "../Images/routerArrow.png";

export default function Button({
  text,
  routePrevious,
  routeNext,
  previousHidden,
}) {
  let lastHidden = { previousHidden };
  return (
    <>
      <div className={styles.mainContainer}>
        {" "}
        <Link href={routePrevious}>
          <img
            src={arrow}
            alt="navigate forward"
            className={styles.arrowBack}
          />
        </Link>
        <div className={styles.secondaryContainer}>
          <div className={styles.stripeContainer}>
            <h1 className={styles.buttonText}>{text}</h1>
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
