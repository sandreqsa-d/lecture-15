import React, { useState } from "react";
import Button from "./Button";
import Ul from "./Ul";

const Task1 = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <Button text={text} setTodos={setTodos} todos={todos} />
      <Ul todos={todos} />
    </div>
  );
};

export default Task1;
