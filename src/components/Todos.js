import React, { useContext, useEffect } from "react";
import { TodosContext } from "./TodosContext";
import TodoItem from "./TodoItem";
import axios from "axios";
import { async } from "q";

const Todos = () => {
    const [todos, setTodos] = useContext(TodosContext);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         axios
    //             .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //             .then(response => setTodos(response.data))
    //             .catch(error => console.log(error));
    //     };
    //     fetchData();
    // });

    const todoItem = todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
    return (
        <div>{todoItem}</div>
    );
};

export default Todos;
