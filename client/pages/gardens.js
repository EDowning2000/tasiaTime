// import React from "react";
// import styles from "../styles/Gardens.module.css";
// import golfBall from "../Images/golfBall.png";
// import Table from "../Components/table";
// import HOLES from "../Constants/Holes";

// export default function Gardens() {
//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.firstContainer}>
//         <h1 className={styles.gardensHeader}>THE GARDENS COURSE</h1>
//         <h4 className={styles.gardensSubHeader}>The Hippo-est Golf in Town!</h4>
//         <div className={styles.mainPictureContainer}>
//           <div className={styles.pictureContainer}>
//             <img src={golfBall} className={styles.golfBallPicture} />
//           </div>
//           <div className={styles.pictureContainer}>
//             <img src={golfBall} className={styles.golfBallPicture} />
//           </div>
//           <div className={styles.pictureContainer}>
//             <img src={golfBall} className={styles.golfBallPicture} />
//           </div>
//         </div>
//         <div className={styles.secondContainer}>
//           {console.log(HOLES[0])}
//           <h3 className={styles.playerOne}>hello world</h3>
//           <h3 className={styles.playerOne}>hello world</h3>

//           {/* <Table
//             HOLE1={HOLES[0].GARDENS_1}
//             HOLE2={HOLES[1].GARDENS_2}
//             HOLE3={HOLES[2].GARDENS_3}
//             HOLE4={HOLES[3].GARDENS_4}
//             HOLE5={HOLES[4].GARDENS_5}
//             HOLE6={HOLES[5].GARDENS_6}
//             HOLE7={HOLES[6].GARDENS_7}
//             HOLE8={HOLES[7].GARDENS_8}
//             HOLE9={HOLES[8].GARDENS_9}
//             HOLE10={HOLES[9].GARDENS_10}
//             HOLE11={HOLES[10].GARDENS_11}
//             HOLE12={HOLES[11].GARDENS_12}
//             HOLE13={HOLES[12].GARDENS_13}
//             HOLE14={HOLES[13].GARDENS_14}
//             HOLE15={HOLES[14].GARDENS_15}
//             HOLE16={HOLES[15].GARDENS_16}
//             HOLE17={HOLES[16].GARDENS_17}
//             HOLE18={HOLES[17].GARDENS_18}
//             TOTAL={HOLES[18].GARDENS_TOTAL}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useContext } from "react";
import { GlobalState } from "../Components/GlobalState";
import styles from "../styles/Index.module.css";
import mainLogo from "../Images/FantasiaGardens.png";
import ButtonForwardOnly from "../Components/buttonForwardOnly";
export default function Gardens() {
  const {
    playerCount,
    playerOne,
    playerTwo,
    playerThree,
    playerFour,
    playerFive,
    setPlayerOneScores,
    playerOneScores,
    setPlayerTwoScores,
    playerTwoScores,
    setPlayerThreeScores,
    playerThreeScores,
    setPlayerFourScores,
    playerFourScores,
    setPlayerFiveScores,
    playerFiveScores,
  } = useContext(GlobalState);
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
            <div className={styles.center3}>
              <h2 className={styles.playerOneTotal}>
                {playerOne} Shot :{" "}
                {playerOneScores[0] +
                  playerOneScores[1] +
                  playerOneScores[2] +
                  playerOneScores[3] +
                  playerOneScores[4] +
                  playerOneScores[5] +
                  playerOneScores[6] +
                  playerOneScores[7] +
                  playerOneScores[8] +
                  playerOneScores[9] +
                  playerOneScores[10] +
                  playerOneScores[11] +
                  playerOneScores[12] +
                  playerOneScores[13] +
                  playerOneScores[14] +
                  playerOneScores[15] +
                  playerOneScores[16] +
                  playerOneScores[17]}
              </h2>
              <br />
              <h2 className={styles.playerTwoTotal}>
                {playerTwo} Shot :{" "}
                {playerTwoScores[0] +
                  playerTwoScores[1] +
                  playerTwoScores[2] +
                  playerTwoScores[3] +
                  playerTwoScores[4] +
                  playerTwoScores[5] +
                  playerTwoScores[6] +
                  playerTwoScores[7] +
                  playerTwoScores[8] +
                  playerTwoScores[9] +
                  playerTwoScores[10] +
                  playerTwoScores[11] +
                  playerTwoScores[12] +
                  playerTwoScores[13] +
                  playerTwoScores[14] +
                  playerTwoScores[15] +
                  playerTwoScores[16] +
                  playerTwoScores[17]}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonForwardOnly text="Good Work!" routeNext="/" />
      </div>
    </>
  );
}
