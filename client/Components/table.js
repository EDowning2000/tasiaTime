import React, { useContext } from "react";
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

  return (
    <>
      <table className={styles.mainTable}>
        <tr className={styles.rowOne}>
          <th className={styles.headerOne}>NAMES</th>
          <td className={styles.dataOne}>filler</td>
          <td className={styles.dataOne}>filler</td>
          <td className={styles.dataOne}>filler</td>
          <td className={styles.dataOne}>filler</td>
          <td className={styles.dataOne}>filler</td>
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
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>2</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE2}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>3</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE3}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>4</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE4}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>5</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE5}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>6</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE6}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>7</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE7}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>8</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE8}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>9</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE9}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>10</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE10}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>11</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE11}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>12</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE12}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>13</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE13}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>14</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE14}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>15</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE15}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>16</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE16}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>17</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE17}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>18</th>
          <th className={styles.holePar}>
            <div className={styles.circle}>{HOLE18}</div>
          </th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>

        <tr>
          <th className={styles.total}>Total</th>
          <th className={styles.totalPar}>{TOTAL}</th>
          <td className={styles.dataFour}>a</td>
          <td className={styles.dataFour}>a</td>
          <td className={styles.dataFour}>a</td>
          <td className={styles.dataFour}>a</td>
          <td className={styles.dataFour}>a</td>
        </tr>
      </table>
    </>
  );
}
