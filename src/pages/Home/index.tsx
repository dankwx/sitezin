import Header from "../../components/Header";
import styles from "./Home.module.scss";
import profile from "../../assets/images/profile.png";
import Routes from "../../routes";
import { Link, Route } from "react-router-dom";
import Canto from "../Canto";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header {...{ title: "dankwx", path: "/" }} />
      <div className={styles.contentContainer}>
        <div className={styles.profile}>
          <img src={profile} alt="profile" />
        </div>
        <div className={styles.links}>
          <p
            onClick={() => {
              window.location.href = "/canto";
            }}
          >
            Meu canto
          </p>

          <p>Mídias</p>
          <p>Sobre</p>
        </div>
        <div className={styles.stampsContainer}>
          <img
            src="https://88by31.neocities.org/misc/2020SUCKS.png"
            alt="stamp"
          />
          <img
            src="https://88by31.neocities.org/misc/BUT_ilovemyfriends.gif"
            alt=""
          />
          <img
            src="https://88by31.neocities.org/misc/education.png"
            alt="stamp"
          />
        </div>
      </div>
    </div>
  );
}
