import React from "react";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { TodosProvider } from "./components/TodosContext";

function App() {
    return (
        <div className="App">
            <div className="container">
                <TodosProvider>
                    <Header />
                    <AddTodo />
                    <Todos />
                </TodosProvider>
            </div>
        </div>
    );
}

export default App;
