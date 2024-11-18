import React from "react";
import { Action, Resources } from "../../types";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  action: Action;
  resources: Resources;
  setResources: React.Dispatch<React.SetStateAction<Resources>>;
}

export default function ActionButton({
  action,
  resources,
  setResources,
}: ActionButtonProps) {
  const performTrade = () => {
    let tradeIsPossible = true;
    const updatedResources = { ...resources };

    action.trades.forEach(({ resourceType, quantity }) => {
      const resource = updatedResources[resourceType];
      const newAmount = resource.amount + quantity;

      tradeIsPossible = tradeIsPossible && newAmount >= 0;
      if (tradeIsPossible) resource.amount = newAmount;
    });

    if (tradeIsPossible) setResources(updatedResources);
  };

  const listItems = action.trades.map(({ resourceType, quantity }) => {
    const resource = resources[resourceType];
    return (
      <li key={resource.name}>
        {quantity > 0 ? "+" : ""}
        {quantity} {resource.icon} {resource.name}
      </li>
    );
  });

  return (
    <div className={styles.box}>
      <p className={styles.name}>{action.name}</p>
      <button className={styles.button} onClick={performTrade}>
        <span className={styles.icon}>{action.icon}</span>
      </button>
      <ul className={styles.trades}>{listItems}</ul>
    </div>
  );
}
