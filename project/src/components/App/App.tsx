import { useEffect, useState } from "react";
import { Resource, Resources } from "../../types";
import ActionsContainer from "../ActionsContainer/ActionsContainer";
import Header from "../Header/Header";
import ResourcesContainer from "../ResourcesContainer/ResourcesContainer";
import styles from "./App.module.css";

export default function App() {
  const [resources, setResources] = useState<Resources>({
    wood: {
      name: "Madeira",
      icon: "🌳",
      amount: 0,
      production: 0,
    },
    coin: {
      name: "Moeda",
      icon: "🪙",
      amount: 0,
      production: 0,
    },
    house: {
      name: "Casa",
      icon: "🏠",
      amount: 0,
      production: 0,
    },
    worker: {
      name: "Trabalhador",
      icon: "👷",
      amount: 0,
      production: 0,
    },
  });

  const produceResource = (resource: Resource) => {
    let newAmount = resource.amount + resource.production;
    if (newAmount < 0) newAmount = 0;
    return {
      ...resource,
      amount: newAmount,
    };
  };

  useEffect(() => {
    const produceResources = () => {
      setResources((resources: Resources) => {
        const updatedResources: Resources = {
          wood: produceResource(resources.wood),
          coin: produceResource(resources.coin),
          house: produceResource(resources.house),
          worker: produceResource(resources.worker),
        };
        return updatedResources;
      });
    };

    const interval = setInterval(produceResources, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className={styles.container}>
      <Header />
      <ResourcesContainer resources={resources} />
      <ActionsContainer resources={resources} setResources={setResources} />
    </article>
  );
}
