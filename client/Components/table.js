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
          <th className={styles.holePar}>{HOLE1}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>2</th>
          <th className={styles.holePar}>{HOLE2}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>3</th>
          <th className={styles.holePar}>{HOLE3}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>4</th>
          <th className={styles.holePar}>{HOLE4}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>5</th>
          <th className={styles.holePar}>{HOLE5}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>6</th>
          <th className={styles.holePar}>{HOLE6}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>7</th>
          <th className={styles.holePar}>{HOLE7}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>8</th>
          <th className={styles.holePar}>{HOLE8}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>9</th>
          <th className={styles.holePar}>{HOLE9}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>10</th>
          <th className={styles.holePar}>{HOLE10}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>11</th>
          <th className={styles.holePar}>{HOLE11}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>12</th>
          <th className={styles.holePar}>{HOLE12}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>13</th>
          <th className={styles.holePar}>{HOLE13}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>14</th>
          <th className={styles.holePar}>{HOLE14}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>15</th>
          <th className={styles.holePar}>{HOLE15}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>16</th>
          <th className={styles.holePar}>{HOLE16}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>17</th>
          <th className={styles.holePar}>{HOLE17}</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
        <tr>
          <th className={styles.holeNumber}>18</th>
          <th className={styles.holePar}>{HOLE18}</th>
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
