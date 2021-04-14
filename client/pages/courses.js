import styles from "../styles/Courses.module.css";
import Button from "../Components/button";
export default function Courses() {
  return (
    <>
      <h1>hello world</h1>
      <Button routePrevious="/" routeNext="/rules" previousHidden={""} />
    </>
  );
}
