import { Action } from "../../types";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  action: Action;
}

export default function ActionButton({ action }: ActionButtonProps) {
  return (
    <div className={styles.box}>
      <p className={styles.name}>{action.name}</p>
      <button className={styles.button}>
        <span className={styles.icon}>{action.icon}</span>
      </button>
    </div>
  );
}
