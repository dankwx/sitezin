import Header from "../../../components/Header";
import styles from "./Post2.module.scss";
import dreamGif from "../../../assets/images/dream.gif";

export default function Post2() {
  return (
    <div className={styles.post1}>
      <Header title="" goBack path="/canto" />
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1>god's face</h1>
        </div>
        <div className={styles.dateSection}>
          <h1>30/10/2022</h1>
        </div>
        <div className={styles.contentSection}>
          <p>
            I once saw the face of God, <br /> a vast and sudden silence among
            the noisy heavens. That evening I dreamt I listened to one side of a
            conversation I should not have overheard.
            <br /> I was not sure if I was awake or asleep, but I was certain
            that I was not alone.
            <br /> i do not watch the skies anymore.
            <br /> I do not look for the face of God.
            <br /> I do not look up.
            <br />
            <br />
          </p>
          <img src={dreamGif} alt="dream" />
          <p className={styles.shakingText}>
            I'm very dissapointed in You. it's raining outside, and there's that
            illuminating light coming from the trees again. do You remember?
            what are You doing right now? how's Your night? we haven't talked in
            a while.
          </p>
        </div>
      </div>
    </div>
  );
}
