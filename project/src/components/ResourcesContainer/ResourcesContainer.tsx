import { resources } from "../../data/resource";
import ResourceDisplay from "../ResourceDisplay/ResourceDisplay";
import styles from "./ResourcesContainer.module.css";

export default function ResourcesContainer() {
  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <ResourceDisplay resource={resources.wood} amount={0} />
        <ResourceDisplay resource={resources.coin} amount={0} />
      </div>
    </section>
  );
}
