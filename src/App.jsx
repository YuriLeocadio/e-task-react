import { useState } from "react";
import { Header } from "./components/Header";
import styles from "./styles/App.module.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Comprar pão",
      isCompleted: false,
    },
  ]);

  function handleClick() {
    if (!inputValue) {
      alert("A tarefa precisa de uma descrição");
    }
  }

  return (
    <>
      <div className={styles.app}>
        <Header />
        <main className={styles.container}>
          <section className={styles["form-section"]}>
            <input
              type="text"
              className={styles.input}
              placeholder="Adicione uma nova tarefa"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button className={styles["create-btn"]} onClick={handleClick}>
              Cadastrar
            </button>
          </section>

          <section className={styles["task-section"]}>
            <header className={styles["task-header"]}>
              <div className={styles["div-task"]}>
                <strong className={styles.strong}>Tarefas criadas</strong>
                <span className={styles["count-tasks"]}>0</span>
              </div>
              <div className={styles["div-task"]}>
                <strong className={styles.strong}>Concluídas</strong>
                <span className={styles["count-finisheds"]}>0</span>
              </div>
            </header>
            <div className="empty-state"></div>

            {tasks.length === 0 && <p>Sem tasks no momento</p>}

            <ul className={styles["task-list"]}>
              {tasks.map((task) => (
                <li key={task.id}>
                  <strong>{task.description}</strong>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
