import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";

export default function TodoItem(props) {
    const { id, title, completed } = props.todo;
    const [todos, setTodos] = useContext(TodosContext);

    const getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none"
        };
    };

    const markComplete = () => {
        const updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updateTodos)
    };

    const delTodo = () => {
        const updateTodos = todos.filter(todo => todo.id !== id)
        setTodos(updateTodos)
    }

    return (
        <p style={getStyle()}>
            <input
                style={{ marginRight: "5px" }}
                type="checkbox"
                name={title}
                todo-id={id}
                onChange={markComplete}
            />
            {title}
            <button style={btnStyle} onClick={delTodo}>x</button>
        </p>
    );
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
};
