import React, { useContext } from "react";
import styles from "../styles/Gardens.module.css";
import golfBall from "../Images/golfBall.png";
import Table from "../Components/table";
import HOLES from "../Constants/Holes";

export default function Gardens() {
  const {
    playerOne,
    playerTwo,
    playerThree,
    playerFour,
    playerFive,
    playerOneScores,
    playerTwoScores,
    playerThreeScores,
    playerFourScores,
    playerFiveScores,
  } = useContext(GlobalState);

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
          {console.log(HOLES[0])}
          <Table
            HOLE1={HOLES[0].GARDENS_1}
            HOLE2={HOLES[1].GARDENS_2}
            HOLE3={HOLES[2].GARDENS_3}
            HOLE4={HOLES[3].GARDENS_4}
            HOLE5={HOLES[4].GARDENS_5}
            HOLE6={HOLES[5].GARDENS_6}
            HOLE7={HOLES[6].GARDENS_7}
            HOLE8={HOLES[7].GARDENS_8}
            HOLE9={HOLES[8].GARDENS_9}
            HOLE10={HOLES[9].GARDENS_10}
            HOLE11={HOLES[10].GARDENS_11}
            HOLE12={HOLES[11].GARDENS_12}
            HOLE13={HOLES[12].GARDENS_13}
            HOLE14={HOLES[13].GARDENS_14}
            HOLE15={HOLES[14].GARDENS_15}
            HOLE16={HOLES[15].GARDENS_16}
            HOLE17={HOLES[16].GARDENS_17}
            HOLE18={HOLES[17].GARDENS_18}
            TOTAL={HOLES[18].GARDENS_TOTAL}
          />
        </div>
      </div>
    </div>
  );
}
