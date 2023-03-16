import React, { useState } from "react";
import "../styles/App.css";

function ToDo({ todos, setTodos }) {
  const addInput = (e, i) => {
    todos[i].value = e.target.value;
    setTodos([...todos]);
  };

  return todos.map((task, i) => (
    <tr key={i}>
      <td>
        <p>{task.id}</p>
      </td>
      <td>
        <input value={task.value} onChange={(e) => addInput(e, i)} />
      </td>
      <td>
        <p>{task.createdAt}</p>
      </td>
    </tr>
  ));
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      value: "",
      createdAt: "20:30",
    },
    {
      id: "todo2",
      value: "",
      createdAt: "18:00",
    },
  ]);

  const reverseOrder = () => {
    let revArr = [];
    while (todos.length != 0) {
      revArr.push(todos.pop());
    }
    setTodos(revArr);
  };

  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          <ToDo todos={todos} setTodos={setTodos} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
