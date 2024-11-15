import styles from "./Resource.module.css";

interface ResourceProps {
  title: string;
  icon: string;
  quantity: number;
}

export default function Resource({ title, icon, quantity }: ResourceProps) {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.button}>
        <span className={styles.icon}>{icon}</span>
      </button>
      <p className={styles.quantity}>{quantity}</p>
    </div>
  );
}
