import styles from "../styles/Index.module.css";
import mainLogo from "../Images/FantasiaGardens.png";
import ButtonForwardOnly from "../Components/buttonForwardOnly";
export default function Index() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.center}>
            <div className={styles.center2}>
              <img
                src={mainLogo}
                alt="Fantasia Gardens Main Logo"
                className={styles.mainLogo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonForwardOnly text="Start!" routeNext="/courses" />
      </div>
    </>
  );
}
