import styles from "./Header.module.scss";

export default function Header(props: { title: string; goBack?: boolean }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className={styles.title}>
          {props.goBack && (
            // on click go to /canto
            <p
              className={styles.goBack}
              onClick={() => {
                window.location.href = "/canto";
              }}
            >
              voltar
            </p>
          )}
          {props.title}
        </h1>
      </div>
      <div className={styles.divisor} />
    </header>
  );
}
