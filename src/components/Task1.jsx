import React, { useState } from "react";
import AddButton from "./AddBtn.jsx";
import Ul from "./Ul.jsx";

const Task1 = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Ul todos={todos} />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <AddButton text={text} setTodos={setTodos} todos={todos} />

    </div>
  );
};

export default Task1;
