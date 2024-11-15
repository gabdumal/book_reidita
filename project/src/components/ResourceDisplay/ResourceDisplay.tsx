import { Resource } from "../../types";
import styles from "./ResourceDisplay.module.css";

interface ResourceDisplayProps {
  resource: Resource;
  amount: number;
}

export default function ResourceDisplay({
  resource,
  amount,
}: ResourceDisplayProps) {
  return (
    <div className={styles.box}>
      <h1 className={styles.name}>{resource.name}</h1>
      <span className={styles.icon}>{resource.icon}</span>
      <p className={styles.quantity}>{amount}</p>
    </div>
  );
}
