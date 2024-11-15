import Resource from "../Resource/Resource";
import styles from "./Resources.module.css";

export default function Resources() {
  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <Resource />
      </div>
    </section>
  );
}
