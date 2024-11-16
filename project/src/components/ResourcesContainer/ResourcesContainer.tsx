import { Resources } from "../../types";
import ResourceDisplay from "../ResourceDisplay/ResourceDisplay";
import styles from "./ResourcesContainer.module.css";

interface ResourcesContainerProps {
  resources: Resources;
}

export default function ResourcesContainer({
  resources,
}: ResourcesContainerProps) {
  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <ResourceDisplay resource={resources.wood} />
        <ResourceDisplay resource={resources.coin} />
      </div>
    </section>
  );
}
