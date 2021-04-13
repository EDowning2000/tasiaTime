import styles from "../styles/Fairways.module.css";
import golfBall from "../Images/golfBall.png";
import Table from "../Components/table";
import HOLES from "../Constants/Holes";

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
        <div className={styles.secondContainer}>
          <Table
            HOLE1={}
            HOLE2={}
            HOLE3={}
            HOLE4={}
            HOLE5={}
            HOLE6={}
            HOLE7={}
            HOLE8={}
            HOLE9={}
            HOLE10={}
            HOLE11={}
            HOLE12={}
            HOLE13={}
            HOLE14={}
            HOLE15={}
            HOLE16={}
            HOLE17={}
            HOLE18={}
            TOTAL={}
          />
        </div>
      </div>
    </div>
  );
}
