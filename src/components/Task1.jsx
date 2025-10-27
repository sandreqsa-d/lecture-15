import { useState } from "react";
import React from 'react'

const Task1 = () => {


    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodo() {
        setTodos(todos.concat(text))
    }

    return (
        <div>
            <input onChange={e => setText(e.target.value)} value={text} />

            {/* BUTTON  */}
            <button onClick={addTodo}>Add</button>

            
            {/* UL */}
            <ul>
                {todos.map((x, index) => <li key={index}>{x}</li>)}
            </ul>
        </div>
    );

}

export default Task1
