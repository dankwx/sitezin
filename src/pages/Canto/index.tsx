import styles from "./Canto.module.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Canto() {
  return (
    <div className={styles.canto}>
      <Header title="Meu canto" />
      <div className={styles.contentContainer}>
        <div className={styles.links}>
          <a href="/canto/post/1">2. o contador</a>
          <a href="/canto/post/2">1. god's face</a>
        </div>
        <div className={styles.paginationSection}>
          <Link className={styles.paginationNumber} to="/canto/2">
            1
          </Link>
          <Link className={styles.paginationNumber} to="/canto/3">
            2
          </Link>
          <Link className={styles.paginationNumber} to="/canto/4">
            3
          </Link>
        </div>
      </div>
    </div>
  );
}
