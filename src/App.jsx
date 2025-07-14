import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div className="container">
      <h2>📝 To-Do List</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>• {task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
