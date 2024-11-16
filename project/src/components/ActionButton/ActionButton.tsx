import React from "react";
import { Action, Resources } from "../../types";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  action: Action;
  setResources: React.Dispatch<React.SetStateAction<Resources>>;
}

export default function ActionButton({
  action,
  setResources,
}: ActionButtonProps) {
  const performTrade = () => {
    let tradeIsPossible = true;

    action.trades.forEach(({ resource, quantity }) => {
      const newAmount = resource.amount + quantity;

      tradeIsPossible = tradeIsPossible && newAmount >= 0;

      if (tradeIsPossible) resource.amount = newAmount;
    });

    if (tradeIsPossible) setResources(resources => ({ ...resources }));
  };

  return (
    <div className={styles.box}>
      <p className={styles.name}>{action.name}</p>
      <button className={styles.button} onClick={performTrade}>
        <span className={styles.icon}>{action.icon}</span>
      </button>
      <ul className={styles.trades}>
        {action.trades.map(({ resource, quantity }) => (
          <li key={resource.name}>
            {quantity > 0 ? "+" : ""}
            {quantity} {resource.icon} {resource.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
