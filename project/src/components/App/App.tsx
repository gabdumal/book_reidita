import { Resource, Resources } from "../../types";
import ActionsContainer from "../ActionsContainer/ActionsContainer";
import Header from "../Header/Header";
import ResourcesContainer from "../ResourcesContainer/ResourcesContainer";
import styles from "./App.module.css";

export default function App() {
  const wood: Resource = {
    name: "Madeira",
    icon: "🌳",
  };

  const coin: Resource = {
    name: "Moeda",
    icon: "🪙",
  };

  const resources: Resources = {
    wood,
    coin,
  };

  return (
    <article className={styles.container}>
      <Header />
      <ResourcesContainer resources={resources} />
      <ActionsContainer resources={resources} />
    </article>
  );
}
