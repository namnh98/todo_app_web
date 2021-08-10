import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //tạo id random
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      task: input,
    });
    setInput("");
  };

  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Thêm một công việc mới"
        value={input}
        className="todo_input"
        onChange={handleChange}
      />
      <button className="todo_add">Thêm</button>
    </form>
  );
}

export default TodoForm;
