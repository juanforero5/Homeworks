import React, { useState, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los callenges',
    done: false
}];

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState("");

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTodo({
            type: "add",
            payload: {
                id: new Date().getTime(),
                description: newTodo,
                done: false
            }
        });
        setNewTodo("");
    };

    return (
        <>
            <TodoHeader todos={todos} />
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} dispatchTodo={dispatchTodo} />
                </div>
                <div className="col-5">
                    <TodoForm newTodo={newTodo} handleNewTodo={handleNewTodo} handleSubmit={handleSubmit} />
                </div>
            </div>
        </>
    );
};
