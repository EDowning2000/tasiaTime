import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css";
import arrow from "../Images/routerArrow.png";

export default function Button({
  text,
  routePrevious,
  routeNext,
  nextHidden,
  previousHidden,
}) {
  let forwardHidden = { nextHidden };
  let backHiden = { previousHidden };
  return (
    <>
      <div className={styles.mainContainer}>
        {" "}
        <Link href="/">
          <img
            src={arrow}
            alt="navigate forward"
            className={styles.arrowBack}
          />
        </Link>
        <div className={styles.secondaryContainer}>
          <div className={styles.stripeContainer}>
            <h3>{text}</h3>
            <div className={styles.lightGreenStripeFirst}></div>
            <div className={styles.darkGreenStripe}></div>
            <div className={styles.lightGreenStripe}></div>
            <div className={styles.darkGreenStripe}></div>
            <div className={styles.lightGreenStripeLast}></div>
          </div>
        </div>
        <Link href="/">
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
