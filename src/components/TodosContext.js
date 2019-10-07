import React, { useState, createContext } from "react";
import uuid from 'uuid'

export const TodosContext = createContext();

export const TodosProvider = props => {
    const [todos, setTodos] = useState([
        {
            id: uuid.v4(),
            title: "Take out the trash",
            completed: false
        },
        {
            id: uuid.v4(),
            title: "Meeting with boss",
            completed: false
        }
    ]);
    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    );
};
