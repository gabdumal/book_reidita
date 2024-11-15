import ActionsContainer from "../ActionsContainer/ActionsContainer";
import Header from "../Header/Header";
import ResourcesContainer from "../ResourcesContainer/ResourcesContainer";
import styles from "./App.module.css";

export default function App() {
  return (
    <article className={styles.container}>
      <Header />
      <ResourcesContainer />
      <ActionsContainer />
    </article>
  );
}
