import styles from "../styles/Courses.module.css";
import Button from "../Components/button";
export default function Courses() {
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
            <div className={styles.center2}>
              <h3 className={styles.gardensHeader}>THE GARDENS COURSE</h3>
              <div className={styles.courseInfoContainer}>
                <img />
                <h6 className={styles.gardensInfo}>
                  TURN MINIATURE GOLFING INTO A SYMPHONY OF FUN FOR THE WHOLE
                  FAMILY. THE GARDENS COURSE IS 18 HOLES OF WHIMSICAL CHALLENGES
                  THAT TAKE PLAYERS THROUGH FIVE ORCHESTRAL MOMENTS OF THE
                  DISNEY CLASSIC, FANTASIA. DANCING FOUNTAINS, MUSICAL
                  INSTRUMENTS AND ANIMATED SATUES ADD TO A GOLFING FANTASY
                  YOU'LL ALWAYS REMEMBER.
                </h6>
              </div>
              <h3 className={styles.fairwaysHeader}>THE FAIRWAYS COURSE</h3>
              <div className={styles.courseInfoContainer}>
                <img />
                <h6 className={styles.fairwaysInfo}>
                  FOR A UNIQUEGOLFING EXPERIENCE, THIS COURSE BRINGS EXCITING
                  CHALLENGE. ENJOY PURE GOLF ON A SMALL SCALE, COMPLETE WITH
                  WATER HAZARDS, SAND TRAPS, GRASSY ROUGHS AND DOG-LEG BENDS
                  THAT DEMAND SKILL FROM THE MOST SEASONED OF PLAYERS. 18
                  BEAUTIFULLY LANDSCAPED HOLES CREATE A SETTING UNLIKE ANY
                  COURSE YOU'VE EVER PLAYED.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          routePrevious="/"
          routeNext="/rules"
          text="Course Descriptions"
        />
      </div>
    </>
  );
}
