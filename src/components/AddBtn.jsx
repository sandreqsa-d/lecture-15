import React from "react";

const addButton = ({ text, todos, setTodos, btnName }) => {
    function addTodo() {
        if (todos.length >= 5) {
            alert("გეყოფა 5. არაა მეტი საჭირო");
            return;
        }
        setTodos(todos.concat(text))
    }
    function removeTodo() {
        if (todos.length === 0) {
            alert("სია ცარიელია")
            return
        }
        setTodos(todos.slice(0, -1))
    }


    return (
        <div style={{
            display: "flex", flexDirection: "column"

        }}>
            <button onClick={addTodo} style={{ marginBlock: "10px" }}>Add</button>
            <button onClick={removeTodo}>Remove</button>
        </div>
    )
};

export default addButton;
