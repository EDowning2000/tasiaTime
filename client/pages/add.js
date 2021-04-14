import styles from "../styles/Add.module.css";
import Button from "../Components/button";

export default function Add() {
  return (
    <>
      <h1>hello</h1>
      <div className={styles.buttonContainer}>
        <Button text="Add Players" routeNext="/hole" routePrevious="/rules" />
      </div>
    </>
  );
}
