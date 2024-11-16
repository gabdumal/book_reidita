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
        {Object.values(resources).map(resource => (
          <ResourceDisplay key={resource.name} resource={resource} />
        ))}
      </div>
    </section>
  );
}
