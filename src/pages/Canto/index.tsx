import styles from "./Canto.module.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

export default function Canto() {
  // create a array of objects from https://api.npoint.io/01bc53fc15a8d1007b48
  const [canto, setCanto] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://api.npoint.io/01bc53fc15a8d1007b48")
      .then((response) => response.json())
      .then((data) => setCanto(data));
  }, []);

  // console log canto
  console.log(canto);

  return (
    <div className={styles.canto}>
      <Header title="Meu canto" />
      <div className={styles.contentContainer}>
        {Object.keys(canto).map((content: any) => (
          // the url will receibe the amount of the canto, like the first canto is 1, the second is 2 and so on
          <a href={`canto/${content}`}>
            <h1>{canto[content].title}</h1>
            <h2>{canto[content].content}</h2>
          </a>
        ))}

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
