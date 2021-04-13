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
        {console.log(HOLES[19])}
        <div className={styles.secondContainer}>
          <Table
            HOLE1={HOLES[19].FAIRWAYS_1}
            HOLE2={HOLES[20].FAIRWAYS_2}
            HOLE3={HOLES[21].FAIRWAYS_3}
            HOLE4={HOLES[22].FAIRWAYS_4}
            HOLE5={HOLES[23].FAIRWAYS_5}
            HOLE6={HOLES[24].FAIRWAYS_6}
            HOLE7={HOLES[25].FAIRWAYS_7}
            HOLE8={HOLES[26].FAIRWAYS_8}
            HOLE9={HOLES[27].FAIRWAYS_9}
            HOLE10={HOLES[28].FAIRWAYS_10}
            HOLE11={HOLES[29].FAIRWAYS_11}
            HOLE12={HOLES[30].FAIRWAYS_12}
            HOLE13={HOLES[31].FAIRWAYS_13}
            HOLE14={HOLES[32].FAIRWAYS_14}
            HOLE15={HOLES[33].FAIRWAYS_15}
            HOLE16={HOLES[34].FAIRWAYS_16}
            HOLE17={HOLES[35].FAIRWAYS_17}
            HOLE18={HOLES[36].FAIRWAYS_18}
            TOTAL={HOLES[37].FAIRWAYS_TOTAL}
          />
        </div>
      </div>
    </div>
  );
}
