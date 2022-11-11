import Header from "../../../components/Header";
import styles from "./Post7.module.scss";

export default function Post6() {
  // get the mp3 of https://www.youtube.com/watch?v=3GcsQGVGtPU and put the audio in the page

  return (
    <div className={styles.post1}>
      <Header title="" goBack path="/canto" />
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1>Site</h1>
        </div>
        <div className={styles.dateSection}>
          <h1>03/11/2022</h1>
        </div>
        <div className={styles.contentSection}>
          <p>fiquei mais de 1 hora fazendo a lógica desse modal de aviso</p>
          <br />
          <img src="https://i.imgur.com/tXDiKdY.png" alt="" />
          <br />
          <p>quebrei a cabeça usando essas expressoes ternárias sendo q umas</p>
          <p>3 pessoas no maximo vao esse site em toda minha vida</p>
        </div>
      </div>
    </div>
  );
}
