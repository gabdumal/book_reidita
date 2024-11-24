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
      trades: [{ resourceType: ResourceType.wood, amount: +1, production: 0 }],
    },
    sellWood: {
      name: "Vender Madeira",
      icon: "💰",
      trades: [
        { resourceType: ResourceType.wood, amount: -1, production: 0 },
        { resourceType: ResourceType.coin, amount: +1, production: 0 },
      ],
    },
    buildHouse: {
      name: "Construir Casa",
      icon: "🛠️",
      trades: [
        { resourceType: ResourceType.wood, amount: -5, production: 0 },
        { resourceType: ResourceType.coin, amount: -5, production: 0 },
        { resourceType: ResourceType.house, amount: +1, production: 0 },
      ],
    },
    hireWorker: {
      name: "Contratar Trabalhador",
      icon: "🧾",
      trades: [
        { resourceType: ResourceType.wood, amount: 0, production: 1 },
        { resourceType: ResourceType.coin, amount: -10, production: 0 },
        { resourceType: ResourceType.house, amount: -1, production: 0 },
        { resourceType: ResourceType.worker, amount: +1, production: 0 },
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
