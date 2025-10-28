import React from "react";

const Button = ({ text, todos, setTodos }) => {
    function addTodo() {
        if (todos.length >= 5) {
            alert("გეყოფა 5. არაა მეტი საჭირო");
            return;
        }
        setTodos(todos.concat(text))
    }


    return <button onClick={addTodo}>Add</button>;
};

export default Button;
