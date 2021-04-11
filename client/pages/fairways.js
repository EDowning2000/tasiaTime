import styles from "../styles/Fairways.module.css";
import golfBall from "../Images/golfBall.png";
import Table from "../Components/table";

export default function Fairways() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <h1 className={styles.fairwaysHeader}>THE FAIRWAYS COURSE</h1>
        <h4 className={styles.fairwaysSubHeader}>
          A Miniature Golfing Adventure
        </h4>
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
        <Table />
      </div>
      {/* <Table /> */}
    </div>
  );
}
