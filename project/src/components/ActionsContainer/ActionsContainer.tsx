import { actions } from "../../data/action";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ActionsContainer.module.css";

export default function ActionsContainer() {
  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <ActionButton action={actions.chopWood} />
      </div>
    </section>
  );
}
