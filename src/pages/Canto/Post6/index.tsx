import Header from "../../../components/Header";
import styles from "./Post6.module.scss";

export default function Post6() {
  // get the mp3 of https://www.youtube.com/watch?v=3GcsQGVGtPU and put the audio in the page

  return (
    <div className={styles.post1}>
      <Header title="" goBack path="/canto" />
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1>gostar de alguem</h1>
        </div>
        <div className={styles.dateSection}>
          <h1>01/11/2022</h1>
        </div>
        <div className={styles.contentSection}>
          <p>quanto mais inicio do ano menos sinto necessidade de afeto </p>
          <br />
          <p>
            quanto mais fim do ano mais carencia tenho.{" "}
            <span>
              outubro <span> novembro</span> e dezembro
            </span>{" "}
            sao os terrores pra mim sao mt imprevisiveis e me sinto mais fragil
            pra questoes romanticas sempre foi assim
          </p>
          <img
            src="https://web.archive.org/web/20091022144337/http://www.geocities.com/pepsi_cutey/sad.gif"
            alt=""
          />
          <br />
          <br />
          <p>
            ja q eh madrugada tenho mt combustivel pra pensar, acho q pra mim um
            dos pontos pra gostar de alguem eh essa pessoa de alguma forma
            parecer que ela sempre tem algo pra contar, nao necessariamente
            sobre ela mas sobre qlq coisa, e q ela saiba fazer tal coisas serem
            interessante.
          </p>
          <br />
          <br />
          <p>
            pq varias pessoas ao longo da minha vida q conversei principalmente
            qnd eu tinhas meus 18-19 anos, pareciam q vc conversava por alguns
            dias, 1 semana e parece q a pessoa n tinha mais nada pra contar.
            parece q ja sabia tudo oq ela tinha a oferecer. tb posso dizer isso
            de outra forma como uma pessoa q saiba instigar e sempre deixar
            qualquer topico assunto q seja mt interessante de se ouvir,{" "}
            <span> ISSO</span> eh uma pessoa que nao se esgota. eh o sentimento
            q vc ta descobrindo a pessoa pra sempre e pra sempre.
          </p>
          <br />
          <p>
            eh saber mesclar entre assuntos mundanos e tb saber falar de
            sentimentos em diferentes momentos. por <span> ISSO</span> que pra
            mim nunca funcionou short talks ou vontade de conhecer varias
            pessoas. emfim, pessoas que nao tem data de validade pq sao
            constantes {">"}
            <br />
          </p>
          <br />
          <p>
            e acho q isso eh essencial nao so pra gostar romanticamente de
            alguem mas pra amizade. ate pq ambas situacoes sao baseadas em
            comunicação e pra mim n tem comunicaçao se eu n ver essa pessoa
            dessa forma
          </p>
          <img
            src="https://web.archive.org/web/20091026175251/http://www.geocities.com/mockswyrm/anime/snooze1.gif"
            alt=""
          />
          <p className={styles.gifDesc}>vo usa esse gif em td</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
