// import React, { useContext } from "react";
// import { GlobalState } from "../Components/GlobalState";
// import styles from "../styles/Fairways.module.css";
// import golfBall from "../Images/golfBall.png";
// import Table from "../Components/table";
// import HOLES from "../Constants/Holes";

// export default function Fairways() {
//   const {
//     playerOne,
//     playerTwo,
//     playerThree,
//     playerFour,
//     playerFive,
//     playerOneScores,
//     playerTwoScores,
//     playerThreeScores,
//     playerFourScores,
//     playerFiveScores,
//   } = useContext(GlobalState);
//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.firstContainer}>
//         <h1 className={styles.fairwaysHeader}>THE FAIRWAYS COURSE</h1>
//         <h4 className={styles.fairwaysSubHeader}>
//           A Miniature Golfing Adventure
//         </h4>
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
//         {console.log(HOLES[19])}
//         <div className={styles.secondContainer}>
//           <Table
//             HOLE1={HOLES[19].FAIRWAYS_1}
//             HOLE2={HOLES[20].FAIRWAYS_2}
//             HOLE3={HOLES[21].FAIRWAYS_3}
//             HOLE4={HOLES[22].FAIRWAYS_4}
//             HOLE5={HOLES[23].FAIRWAYS_5}
//             HOLE6={HOLES[24].FAIRWAYS_6}
//             HOLE7={HOLES[25].FAIRWAYS_7}
//             HOLE8={HOLES[26].FAIRWAYS_8}
//             HOLE9={HOLES[27].FAIRWAYS_9}
//             HOLE10={HOLES[28].FAIRWAYS_10}
//             HOLE11={HOLES[29].FAIRWAYS_11}
//             HOLE12={HOLES[30].FAIRWAYS_12}
//             HOLE13={HOLES[31].FAIRWAYS_13}
//             HOLE14={HOLES[32].FAIRWAYS_14}
//             HOLE15={HOLES[33].FAIRWAYS_15}
//             HOLE16={HOLES[34].FAIRWAYS_16}
//             HOLE17={HOLES[35].FAIRWAYS_17}
//             HOLE18={HOLES[36].FAIRWAYS_18}
//             TOTAL={HOLES[37].FAIRWAYS_TOTAL}
//           />
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
export default function Fairways() {
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
