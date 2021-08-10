import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const taskItem = [task, ...tasks];
    setTasks(taskItem);
    console.log(...task);
  };

  return (
    <div>
      <h1>Hôm nay bạn sẽ làm gì?</h1>
      <TodoForm onSubmit={addTask} />
    </div>
  );
}

export default TodoList;
