import Header from "../../../components/Header";
import styles from "./Post3.module.scss";
import dreamGif from "../../../assets/images/dream.gif";

export default function Post3() {
  return (
    <div className={styles.post1}>
      <Header title="" goBack path="/canto" />
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1>sett</h1>
        </div>
        <div className={styles.dateSection}>
          <h1>23/10/2022</h1>
        </div>
        <div className={styles.contentSection}>
          <p>hj ganhei na capsula prime essa skin do sett </p>
          <br />
          <img src="https://i.imgur.com/Oa7NY5q.png" alt="" />
          <p>percebi q nesse ano n gastei nenhum centavo com skin no lol. <br />
          e ganhei boas</p>
          <br />
          <img src="https://i.imgur.com/bqqAaob.png" alt="" />
          <img src="https://i.imgur.com/Iqna585.png" alt="" />
          <img src="https://i.imgur.com/2u8DYIi.png" alt="" />
          <img src="https://i.imgur.com/wM5ectG.png" alt="" />
          <img src="https://i.imgur.com/5sudZ5C.png" alt="" />
          <img src="https://i.imgur.com/6Dzu1Rw.png" alt="" />
          <img src="https://i.imgur.com/GAMfF1O.png" alt="" />
          <img src="https://i.imgur.com/MK2L259.png" alt="" />
          <img src="https://i.imgur.com/aMFvmdy.png" alt="" />
          <p>ta d boa</p>
          <br />
        </div>
      </div>
    </div>
  );
}
