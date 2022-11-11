import Header from "../../../components/Header";
import styles from "./Post1.module.scss";

export default function Post1() {
  return (
    <div className={styles.post1}>
      <Header title="" goBack path="/canto" />
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1>o contador</h1>
        </div>
        <div className={styles.dateSection}>
          <h1>31/10/2022</h1>
        </div>
        <div className={styles.contentSection}>
          <p>
            assisti <strong>o contador</strong> hj, curti...
            <br />
          </p>
          <img src="https://i.imgur.com/H7A6mVD.png" alt="" />
          <img src="https://i.imgur.com/HEpUYQE.png" alt="" />
          <img src="https://i.imgur.com/B0zYSnT.png" alt="" />
          <img src="https://i.imgur.com/RACRxtp.png" alt="" />
          <p className={styles.lastP}>eu e quem <br /> dps de assistir me questionei <br />se tenho síndrome de asperger .</p>
          <img className={styles.gif} src="https://web.archive.org/web/20091027190933/http://ar.geocities.com/mimundoelanime/ani_hany.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
