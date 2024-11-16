import { Action, Actions, Resources } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ActionsContainer.module.css";

/* ActionsContainer.tsx */

interface ActionsContainerProps {
  resources: Resources;
}

export default function ActionsContainer({ resources }: ActionsContainerProps) {
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

  const actions: Actions = {
    chopWood,
    sellWood,
  };

  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <ActionButton action={actions.chopWood} />
        <ActionButton action={actions.sellWood} />
      </div>
    </section>
  );
}
