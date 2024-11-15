import styles from "./Resource.module.css";

export default function Resource() {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Madeira</h1>
      <button className={styles.button}>
        <span className={styles.icon}>🌳</span>
      </button>
      <p className={styles.quantity}>0</p>
    </div>
  );
}
