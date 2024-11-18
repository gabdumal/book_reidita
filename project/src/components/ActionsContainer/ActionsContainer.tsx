import { Action, Actions, Resources, ResourceType } from "../../types";
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
    trades: [{ resourceType: ResourceType.wood, quantity: +1 }],
  };

  const sellWood: Action = {
    name: "Vender Madeira",
    icon: "💰",
    trades: [
      { resourceType: ResourceType.wood, quantity: -1 },
      { resourceType: ResourceType.coin, quantity: +1 },
    ],
  };

  const buildHouse: Action = {
    name: "Construir Casa",
    icon: "🛠️",
    trades: [
      { resourceType: ResourceType.wood, quantity: -5 },
      { resourceType: ResourceType.coin, quantity: -5 },
      { resourceType: ResourceType.house, quantity: +1 },
    ],
  };

  const hireWorker: Action = {
    name: "Contratar Trabalhador",
    icon: "🧾",
    trades: [
      { resourceType: ResourceType.coin, quantity: -10 },
      { resourceType: ResourceType.house, quantity: -1 },
      { resourceType: ResourceType.worker, quantity: +1 },
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
            resources={resources}
            setResources={setResources}
          />
        ))}
      </div>
    </section>
  );
}
