import styles from "../styles/Rules.module.css";
import golfBall from "../images/golfBall.png";

export default function Rules() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <h1 className={styles.rulesOfPlay}>RULES OF PLAY</h1>
        <div className={styles.individualRulesContainer}>
          <h5 className={styles.individualRule}>TEE OFF</h5>
          <h6 className={styles.individualRuleInfo}>
            ALL PLAYERS IN A GROUP HIT THEIR FIRST SHOTS, THEN PROCEED TOGETHER
            TO THEIR SECOND SHOT. SIX (6) STROKE LIMIT ON ALL HOLES.
          </h6>
          <h5 className={styles.individualRule}>MAXIMUM GROUP SIZE</h5>
          <h6 className={styles.individualRuleInfo}>
            NO MORE THAN FIVE (5) PLAYERS TO A GROUP. PLEASE ALLOW FASTER GROUPS
            TO ADVANCE.
          </h6>
          <h5 className={styles.individualRule}>OUT-OF-BOUNDS</h5>
          <h6 className={styles.individualRuleInfo}>
            IF YOUR BALL LANDS IN ANY LANDSCAPING, NATURAL GRASS, OR WATER
            HAZARD, IT IS CONSIDERED OUT-OF-BOUNDS. PLEASE PLACE THE BALL BACK
            ONTO THE COURSE. ONCE CLUB HEAD AWAY FROM THE AREA AND TAKE ONE
            PENALTY STROKE.
          </h6>
          <h5 className={styles.individualRule}>SAFETY</h5>
          <h6 className={styles.individualRuleInfo}>
            PLEASE AVOID TAKING FULL SWINGS WITH THE PUTTERS AND BE AWARE OF
            YOUR SURROUNDINGS AT ALL TIMES. KEEP A SAFE DISTANCE BEHIND ANYONE
            PUTTING. FOR SAFETY, PLEASE STAY ON THE COURSE AND WALKWAYS. REFRAIN
            FROM CLIMBING ON THE SHOW PROPS.
          </h6>
        </div>
        <img src={golfBall} />
      </div>
    </div>
  );
}
