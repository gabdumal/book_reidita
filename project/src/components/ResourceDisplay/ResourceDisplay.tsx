import { Resource } from "../../types";
import styles from "./ResourceDisplay.module.css";

interface ResourceDisplayProps {
  resource: Resource;
}

export default function ResourceDisplay({ resource }: ResourceDisplayProps) {
  return (
    <div className={styles.box}>
      <h1 className={styles.name}>{resource.name}</h1>
      <span className={styles.icon}>{resource.icon}</span>
      <div className={styles.data}>
        <p className={styles.amount}>{resource.amount}</p>
        <p className={styles.production}>{resource.production} / s</p>
      </div>
    </div>
  );
}
