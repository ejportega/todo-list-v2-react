import React, { useState, useContext } from "react";
import { TodosContext } from "./TodosContext";
import uuid from "uuid";

const AddTodo = () => {
    const [todos, setTodos] = useContext(TodosContext);
    const [title, setTitle] = useState("");

    const addTodo = e => {
        e.preventDefault();
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        setTitle('')
    };

    return (
        <form style={{ display: "flex" }} onSubmit={addTodo}>
            <input
                type="text"
                name="title"
                style={{ flex: "10", padding: "5px" }}
                placeholder="Add Todo..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button className="btn">Submit</button>
        </form>
    );
};

export default AddTodo;
