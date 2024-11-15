import Header from "../Header/Header";
import Resources from "../Resources/Resources";
import styles from "./App.module.css";

export default function App() {
  return (
    <article className={styles.container}>
      <Header />
      <Resources />
    </article>
  );
}
