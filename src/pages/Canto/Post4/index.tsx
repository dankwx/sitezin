import Header from "../../../components/Header";
import styles from "./Post3.module.scss";

export default function Post4() {
  return (
    <div className={styles.post1}>
      <Header title="" goBack path="/canto" />
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1>marci</h1>
        </div>
        <div className={styles.dateSection}>
          <h1>09/11/2022</h1>
        </div>
        <div className={styles.contentSection}>
          <p>minha sequência de vitórias me deixa feliz </p>
          <br />
          <p>mt obrigado marci por ser um herói tao bom de se joga</p>
          <br />
          <img width={500} src="https://i.imgur.com/IS4FyAE.png" alt="" />
          <p>provavelmente zikei por postar isso e agr vou perder todas mas n importa q amor</p>
          <br />
          <img src="https://i.imgur.com/J4u8iwz.png" alt="" />
          <br />
          <p>👆btw😵</p>
          <br />
        </div>
      </div>
    </div>
  );
}
