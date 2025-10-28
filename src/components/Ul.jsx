import React from "react";

const Ul = ({ todos }) => {
    return (
        <ul
            style={{
                background: "#f0f0f0",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                listStyle: "none",
                maxWidth: "300px",
                margin: "20px auto",
            }}
        >
            {todos.map((x, y) => (
                <li
                    key={y}
                    style={{
                        padding: "10px",
                        marginBottom: "10px",
                        background: "#fff",
                        borderRadius: "5px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        color: "black"
                    }}
                >
                    {x}
                </li>
            ))}
        </ul>

    );
};

export default Ul;