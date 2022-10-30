import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title({ title: "dankwx" })}</div>
      <div className={styles.divisor} />
    </header>
  );
}

export function title(props: { title: string }) {
  return <h1 className={styles.titla}>{props.title}</h1>;
}
