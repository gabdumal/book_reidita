import { Action, Actions, Resources } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ActionsContainer.module.css";

/* ActionsContainer.tsx */

interface ActionsContainerProps {
  resources: Resources;
  setResources: React.Dispatch<React.SetStateAction<Resources>>;
}

export default function ActionsContainer({
  resources,
  setResources,
}: ActionsContainerProps) {
  const chopWood: Action = {
    name: "Cortar Madeira",
    icon: "🪓",
    trades: [{ resource: resources.wood, quantity: +1 }],
  };

  const sellWood: Action = {
    name: "Vender Madeira",
    icon: "💰",
    trades: [
      { resource: resources.wood, quantity: -1 },
      { resource: resources.coin, quantity: +1 },
    ],
  };

  const buildHouse: Action = {
    name: "Construir Casa",
    icon: "🛠️",
    trades: [
      { resource: resources.wood, quantity: -5 },
      { resource: resources.coin, quantity: -5 },
      { resource: resources.house, quantity: +1 },
    ],
  };

  const hireWorker: Action = {
    name: "Contratar Trabalhador",
    icon: "🧾",
    trades: [
      { resource: resources.coin, quantity: -10 },
      { resource: resources.house, quantity: -1 },
      { resource: resources.worker, quantity: +1 },
    ],
  };

  const actions: Actions = {
    chopWood,
    sellWood,
    buildHouse,
    hireWorker,
  };

  return (
    <section className={styles.container}>
      <div className={styles.group}>
        {Object.values(actions).map(action => (
          <ActionButton
            key={action.name}
            action={action}
            setResources={setResources}
          />
        ))}
      </div>
    </section>
  );
}
