import styles from "../styles/Gardens.module.css";
import golfBall from "../Images/golfBall.png";
import Table from "../Components/table";

export default function Gardens() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <h1 className={styles.gardensHeader}>THE GARDENS COURSE</h1>
        <h4 className={styles.gardensSubHeader}>The Hippo-est Golf in Town!</h4>
        <div className={styles.mainPictureContainer}>
          <div className={styles.pictureContainer}>
            <img src={golfBall} className={styles.golfBallPicture} />
          </div>
          <div className={styles.pictureContainer}>
            <img src={golfBall} className={styles.golfBallPicture} />
          </div>
          <div className={styles.pictureContainer}>
            <img src={golfBall} className={styles.golfBallPicture} />
          </div>
        </div>
        <div className={styles.secondContainer}>
          <Table />
        </div>
      </div>
    </div>
  );
}
