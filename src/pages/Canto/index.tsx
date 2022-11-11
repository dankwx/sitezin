import styles from "./Canto.module.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useState } from "react";

export default function Canto() {
  const [showModal, setShowModal] = useState(
    localStorage.getItem("showModal") === "true" ? false : true
  );

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("showModal", "true");
  };

  return (
    <div className={styles.canto}>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h1>Aviso</h1>
            <p>
              isso n eh um diário. <br />
              oq tem aq eh so coisa q escrevo qnd da vontade <br /> <br />
              esse aviso so aparece 1 vez
            </p>
            <button onClick={closeModal}>ok</button>
          </div>
        </div>
      )}
      <Header title="" goBack path="/" />
      <Header title="Meu canto" path="/" />
      <div className={styles.contentContainer}>
        <div className={styles.links}>
          <a href="/canto/post/4">7. marci</a>
          <a href="/canto/post/5">6. c</a>
          <a href="/canto/post/7">5. site</a>
          <a href="/canto/post/6">4. gostar de alguem</a>
          <a href="/canto/post/1">3. o contador</a>
          <a href="/canto/post/2">2. god's face</a>
          <a href="/canto/post/3">1. sett</a>
        </div>
        <div className={styles.paginationSection}>
          <Link className={styles.paginationNumber} to="/canto/">
            1
          </Link>
          {/* <Link className={styles.paginationNumber} to="/canto/3">
            2
          </Link>
          <Link className={styles.paginationNumber} to="/canto/4">
            3
          </Link> */}
        </div>
      </div>
    </div>
  );
}
