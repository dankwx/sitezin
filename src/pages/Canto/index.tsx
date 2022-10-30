import styles from "./Canto.module.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { title } from "../../components/Header";

export default function Canto() {
  return (
    <div className={styles.canto}>
      <Header />
      <Link to="/">Home</Link>
    </div>
  );
}
