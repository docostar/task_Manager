// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const name = "India";
  let x = false;
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appoinment",
      day: "July 7th 2021 at 4:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meet at school",
      day: "July 9th 2021 at 10:30am",
      reminder: true,
    },
    {
      id: 3,
      text: "Listnel Music",
      day: "July 15th 2021 at 5:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Play Football",
      day: "July 15th 2021 at 5:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    console.log("Delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    // console.log("Toggle", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header
        title="Namste"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* <h1>Jai Bharat</h1>
      <h2>Namste {name} </h2>
      <h3>X is:{x ? "Yes" : "No"} </h3> */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
