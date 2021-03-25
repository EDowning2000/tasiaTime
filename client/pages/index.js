import styles from "../styles/Home.module.css";
import mainLogo from "../Images/FantasiaGardens.png";
export default function Home() {
  return (
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
  );
}
