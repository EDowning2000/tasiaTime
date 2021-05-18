import React, { useContext } from "react";
import { GlobalState } from "../Components/GlobalState";
import styles from "../styles/Table.module.css";

export default function Table({
  HOLE1,
  HOLE2,
  HOLE3,
  HOLE4,
  HOLE5,
  HOLE6,
  HOLE7,
  HOLE8,
  HOLE9,
  HOLE10,
  HOLE11,
  HOLE12,
  HOLE13,
  HOLE14,
  HOLE15,
  HOLE16,
  HOLE17,
  HOLE18,
  TOTAL,
}) {
  // end of the props

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
  //end of the global state variables

  let playerOneTotal =
    playerOneScores[0] +
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
    playerOneScores[17];

  let playerTwoTotal =
    playerTwoScores[0] +
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
    playerTwoScores[17];

  let playerThreeTotal =
    playerThreeScores[0] +
    playerThreeScores[1] +
    playerThreeScores[2] +
    playerThreeScores[3] +
    playerThreeScores[4] +
    playerThreeScores[5] +
    playerThreeScores[6] +
    playerThreeScores[7] +
    playerThreeScores[8] +
    playerThreeScores[9] +
    playerThreeScores[10] +
    playerThreeScores[11] +
    playerThreeScores[12] +
    playerThreeScores[13] +
    playerThreeScores[14] +
    playerThreeScores[15] +
    playerThreeScores[16] +
    playerThreeScores[17];

  let playerFourTotal =
    playerFourScores[0] +
    playerFourScores[1] +
    playerFourScores[2] +
    playerFourScores[3] +
    playerFourScores[4] +
    playerFourScores[5] +
    playerFourScores[6] +
    playerFourScores[7] +
    playerFourScores[8] +
    playerFourScores[9] +
    playerFourScores[10] +
    playerFourScores[11] +
    playerFourScores[12] +
    playerFourScores[13] +
    playerFourScores[14] +
    playerFourScores[15] +
    playerFourScores[16] +
    playerFourScores[17];

  let playerFiveTotal =
    playerFiveScores[0] +
    playerFiveScores[1] +
    playerFiveScores[2] +
    playerFiveScores[3] +
    playerFiveScores[4] +
    playerFiveScores[5] +
    playerFiveScores[6] +
    playerFiveScores[7] +
    playerFiveScores[8] +
    playerFiveScores[9] +
    playerFiveScores[10] +
    playerFiveScores[11] +
    playerFiveScores[12] +
    playerFiveScores[13] +
    playerFiveScores[14] +
    playerFiveScores[15] +
    playerFiveScores[16] +
    playerFiveScores[17];
  //end of the player total scores

  return (
    <>
      <table className={styles.mainTable}>
        <tr className={styles.rowOne}>
          <th className={styles.headerOne}>NAMES</th>
          <td className={styles.dataOne}>{playerOne}</td>
          <td className={styles.dataOne}>{playerTwo}</td>
          <td className={styles.dataOne}>{playerThree}</td>
          <td className={styles.dataOne}>{playerFour}</td>
          <td className={styles.dataOne}>{playerFive}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th className={styles.headerHole}>Hole</th>
          <th className={styles.headerPar}>Par</th>
          <td className={styles.dataTwo}></td>
        </tr>
      </table>
      <table className={styles.secondaryTable}>
        <tr>
          <th className={styles.holeNumber}>1</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE1}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[0]}</td>
          <td className={styles.dataThree}>{playerTwoScores[0]}</td>
          <td className={styles.dataThree}>{playerThreeScores[0]}</td>
          <td className={styles.dataThree}>{playerFourScores[0]}</td>
          <td className={styles.dataThree}>{playerFiveScores[0]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>2</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE2}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[1]}</td>
          <td className={styles.dataThree}>{playerTwoScores[1]}</td>
          <td className={styles.dataThree}>{playerThreeScores[1]}</td>
          <td className={styles.dataThree}>{playerFourScores[1]}</td>
          <td className={styles.dataThree}>{playerFiveScores[1]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>3</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE3}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[2]}</td>
          <td className={styles.dataThree}>{playerTwoScores[2]}</td>
          <td className={styles.dataThree}>{playerThreeScores[2]}</td>
          <td className={styles.dataThree}>{playerFourScores[2]}</td>
          <td className={styles.dataThree}>{playerFiveScores[2]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>4</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE4}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[3]}</td>
          <td className={styles.dataThree}>{playerTwoScores[3]}</td>
          <td className={styles.dataThree}>{playerThreeScores[3]}</td>
          <td className={styles.dataThree}>{playerFourScores[3]}</td>
          <td className={styles.dataThree}>{playerFiveScores[3]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>5</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE5}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[4]}</td>
          <td className={styles.dataThree}>{playerTwoScores[4]}</td>
          <td className={styles.dataThree}>{playerThreeScores[4]}</td>
          <td className={styles.dataThree}>{playerFourScores[4]}</td>
          <td className={styles.dataThree}>{playerFiveScores[4]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>6</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE6}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[5]}</td>
          <td className={styles.dataThree}>{playerTwoScores[5]}</td>
          <td className={styles.dataThree}>{playerThreeScores[5]}</td>
          <td className={styles.dataThree}>{playerFourScores[5]}</td>
          <td className={styles.dataThree}>{playerFiveScores[5]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>7</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE7}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[6]}</td>
          <td className={styles.dataThree}>{playerTwoScores[6]}</td>
          <td className={styles.dataThree}>{playerThreeScores[6]}</td>
          <td className={styles.dataThree}>{playerFourScores[6]}</td>
          <td className={styles.dataThree}>{playerFiveScores[6]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>8</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE8}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[7]}</td>
          <td className={styles.dataThree}>{playerTwoScores[7]}</td>
          <td className={styles.dataThree}>{playerThreeScores[7]}</td>
          <td className={styles.dataThree}>{playerFourScores[7]}</td>
          <td className={styles.dataThree}>{playerFiveScores[7]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>9</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE9}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[8]}</td>
          <td className={styles.dataThree}>{playerTwoScores[8]}</td>
          <td className={styles.dataThree}>{playerThreeScores[8]}</td>
          <td className={styles.dataThree}>{playerFourScores[8]}</td>
          <td className={styles.dataThree}>{playerFiveScores[8]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>10</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE10}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[9]}</td>
          <td className={styles.dataThree}>{playerTwoScores[9]}</td>
          <td className={styles.dataThree}>{playerThreeScores[9]}</td>
          <td className={styles.dataThree}>{playerFourScores[9]}</td>
          <td className={styles.dataThree}>{playerFiveScores[9]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>11</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE11}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[10]}</td>
          <td className={styles.dataThree}>{playerTwoScores[10]}</td>
          <td className={styles.dataThree}>{playerThreeScores[10]}</td>
          <td className={styles.dataThree}>{playerFourScores[10]}</td>
          <td className={styles.dataThree}>{playerFiveScores[10]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>12</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE12}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[11]}</td>
          <td className={styles.dataThree}>{playerTwoScores[11]}</td>
          <td className={styles.dataThree}>{playerThreeScores[11]}</td>
          <td className={styles.dataThree}>{playerFourScores[11]}</td>
          <td className={styles.dataThree}>{playerFiveScores[11]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>13</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE13}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[12]}</td>
          <td className={styles.dataThree}>{playerTwoScores[12]}</td>
          <td className={styles.dataThree}>{playerThreeScores[12]}</td>
          <td className={styles.dataThree}>{playerFourScores[12]}</td>
          <td className={styles.dataThree}>{playerFiveScores[12]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>14</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE14}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[13]}</td>
          <td className={styles.dataThree}>{playerTwoScores[13]}</td>
          <td className={styles.dataThree}>{playerThreeScores[13]}</td>
          <td className={styles.dataThree}>{playerFourScores[13]}</td>
          <td className={styles.dataThree}>{playerFiveScores[13]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>15</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE15}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[14]}</td>
          <td className={styles.dataThree}>{playerTwoScores[14]}</td>
          <td className={styles.dataThree}>{playerThreeScores[14]}</td>
          <td className={styles.dataThree}>{playerFourScores[14]}</td>
          <td className={styles.dataThree}>{playerFiveScores[14]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>16</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE16}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[15]}</td>
          <td className={styles.dataThree}>{playerTwoScores[15]}</td>
          <td className={styles.dataThree}>{playerThreeScores[15]}</td>
          <td className={styles.dataThree}>{playerFourScores[15]}</td>
          <td className={styles.dataThree}>{playerFiveScores[15]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>17</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE17}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[16]}</td>
          <td className={styles.dataThree}>{playerTwoScores[16]}</td>
          <td className={styles.dataThree}>{playerThreeScores[16]}</td>
          <td className={styles.dataThree}>{playerFourScores[16]}</td>
          <td className={styles.dataThree}>{playerFiveScores[16]}</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>18</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE18}</div>
          </th>
          <td className={styles.dataThree}>{playerOneScores[17]}</td>
          <td className={styles.dataThree}>{playerTwoScores[17]}</td>
          <td className={styles.dataThree}>{playerThreeScores[17]}</td>
          <td className={styles.dataThree}>{playerFourScores[17]}</td>
          <td className={styles.dataThree}>{playerFiveScores[17]}</td>
        </tr>

        <tr>
          <th className={styles.total}>Total</th>
          <th className={styles.totalPar}>{TOTAL}</th>
          <td className={styles.dataFour}>{playerOneTotal}</td>
          <td className={styles.dataFour}>{playerTwoTotal}</td>
          <td className={styles.dataFour}>{playerThreeTotal}</td>
          <td className={styles.dataFour}>{playerFourTotal}</td>
          <td className={styles.dataFour}>{playerFiveTotal}</td>
        </tr>
      </table>
    </>
  );
}
