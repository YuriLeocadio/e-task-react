import { useState } from "react";
import { Header } from "./components/Header";
import styles from "./styles/App.module.css";
import { STORAGE_SERVICE } from "./services/storage";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => STORAGE_SERVICE.listTasks());

  function handleClick() {
    if (!inputValue) {
      return alert("A tarefa precisa de uma descrição");
    }

    const newTask = {
      description: inputValue,
      isCompleted: false,
    }

    setTasks(prevState => [...prevState, newTask]);
    STORAGE_SERVICE.createTask(inputValue);
    setInputValue('')
  }
  
  function handleCheckboxChange(event){
    STORAGE_SERVICE.updateTaskState(event.target.value)
    const updatedTasks = STORAGE_SERVICE.listTasks

    setTasks(updatedTasks)
  }

  const countTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

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
                <span className={styles["count-tasks"]}>{countTasks}</span>
              </div>
              <div className={styles["div-task"]}>
                <strong className={styles.strong}>Concluídas</strong>
                <span className={styles["count-finisheds"]}>{completedTasks}</span>
              </div>
            </header>
            <div className="empty-state"></div>

            {tasks.length === 0 && <p>Sem tasks no momento</p>}

            <ul className={styles["task-list"]}>
              {tasks.map((task) => (
                <li key={task.description} className={styles["task-item"]}>
                  <input type="checkbox" 
                  onChange={handleCheckboxChange}
                  value={task.description}
                  checked={task.isCompleted} />
                  <p>{task.description}</p>
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
