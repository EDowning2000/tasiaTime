import styles from "../styles/Table.module.css";

export default function Table() {
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
          <th className={styles.holePar}>4</th>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
          <td className={styles.dataThree}>a</td>
        </tr>
      </table>
    </>
  );
}
