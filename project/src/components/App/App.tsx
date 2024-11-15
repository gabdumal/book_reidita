import Header from "../Header/Header";
import styles from "./App.module.css";

export default function App() {
  return (
    <article className={styles.container}>
      <Header />
      <p>
        Vamos construir um jogo de clicker simples para entendermos os conceitos
        básicos de React.
      </p>
    </article>
  );
}
