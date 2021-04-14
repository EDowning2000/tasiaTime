import styles from "../styles/Rules.module.css";
import golfBall from "../images/golfBall.png";
import Button from "../Components/button";

export default function Rules() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
          <h1 className={styles.rulesOfPlay}>RULES OF PLAY</h1>
          <div className={styles.individualRulesContainer}>
            <h5 className={styles.individualRule}>TEE OFF</h5>
            <h6 className={styles.individualRuleInfo}>
              ALL PLAYERS IN A GROUP HIT THEIR FIRST SHOTS, THEN PROCEED
              TOGETHER TO THEIR SECOND SHOT. SIX (6) STROKE LIMIT ON ALL HOLES.
            </h6>
            <h5 className={styles.individualRule}>MAXIMUM GROUP SIZE</h5>
            <h6 className={styles.individualRuleInfo}>
              NO MORE THAN FIVE (5) PLAYERS TO A GROUP. PLEASE ALLOW FASTER
              GROUPS TO ADVANCE.
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
              PUTTING. FOR SAFETY, PLEASE STAY ON THE COURSE AND WALKWAYS.
              REFRAIN FROM CLIMBING ON THE SHOW PROPS.
            </h6>
          </div>
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
          <div className={styles.readyForMore}>
            <h1 className={styles.readyForMoreTitle}>
              READY FOR MORE MINIATURE GOLF?
            </h1>
            <h6 className={styles.moreMiniGolfInfo}>
              HAVE YOU EVER WONDERED WHERE SANTA GOES THE OTHER 364 DAYS OF THE
              YEAR? YOU MAY WANT TO CHECK OUT DISNEY'S WINTER SUMMERLAND
              MINIATURE GOLF, SANTAS PERSONAL VACATION RETREAT. FROM ICE PALACES
              AND SAND CASTLES TO A TRIP UP TO THE NORTH POLE, THESE COURSES
              WILL GIVE YOU A CHILL. DISNEY'S WINTER SUMMERLAND MINIATURE GOLF
              IS LOCATED JUST OUTSIDE THE GATES OF DISNEY'S BLIZZARD BEACH WATER
              PARK.{" "}
            </h6>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button text="Rules" routeNext="/add" routePrevious="/courses" />
      </div>
    </>
  );
}
