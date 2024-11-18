import { Actions, Resources, ResourceType } from "../../types";
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
  const actions: Actions = {
    chopWood: {
      name: "Cortar Madeira",
      icon: "🪓",
      trades: [{ resourceType: ResourceType.wood, quantity: +1 }],
    },
    sellWood: {
      name: "Vender Madeira",
      icon: "💰",
      trades: [
        { resourceType: ResourceType.wood, quantity: -1 },
        { resourceType: ResourceType.coin, quantity: +1 },
      ],
    },
    buildHouse: {
      name: "Construir Casa",
      icon: "🛠️",
      trades: [
        { resourceType: ResourceType.wood, quantity: -5 },
        { resourceType: ResourceType.coin, quantity: -5 },
        { resourceType: ResourceType.house, quantity: +1 },
      ],
    },
    hireWorker: {
      name: "Contratar Trabalhador",
      icon: "🧾",
      trades: [
        { resourceType: ResourceType.coin, quantity: -10 },
        { resourceType: ResourceType.house, quantity: -1 },
        { resourceType: ResourceType.worker, quantity: +1 },
      ],
    },
  };

  return (
    <section className={styles.container}>
      <div className={styles.group}>
        {Object.entries(actions).map(([actionType, action]) => (
          <ActionButton
            key={actionType}
            action={action}
            resources={resources}
            setResources={setResources}
          />
        ))}
      </div>
    </section>
  );
}
