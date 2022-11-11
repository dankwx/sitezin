import Header from "../../../components/Header";
import styles from "./Post5.module.scss";

export default function Post5() {
  return (
    <div className={styles.post1}>
      <Header title="" goBack path="/canto" />
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1>c</h1>
        </div>
        <div className={styles.dateSection}>
          <h1>07/11/2022</h1>
        </div>
        <div className={styles.contentSection}>
          <p>dps de anos voltei p academia o pior ja foi(se inscrever </p>
          <br />
          <p className={styles.loveText}>ordem do q mais gosto..</p>
          <p>
            fazer cardio <span>{">"}</span> pernas <span>{">"}</span> costas{" "}
            <span>{">"}</span> peito
          </p>
          <br />
          <p>
            meu biotipo nao me deixa bombado entao vo se magro mas c
            abdomen😈44 packs
          </p>
          <br />
          <p>
            a sensaçao boa pelo fato d ser cientificamente comprovado q
            exercicio libera endorfina e td vez q termino fico pensando no meu
            corpo fazendo isso tao bonitinho e fodinha ele me fazendo se sentir
            bem
          </p>
          <br />
          <p>pelo menos pra isso n sinto falta de energia
            <br />
          </p>
          <img
            src="https://web.archive.org/web/20091026175251/http://www.geocities.com/mockswyrm/anime/snooze1.gif"
            alt=""
          />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
