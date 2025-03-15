import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id: 1, text: "Learn React", completed: false},
        {id: 2, text: "Learn Jest", completed: false},
    ]);

    const [input, setInput] = useState("");

    const addTodo = (text) => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text, completed: false } ]);
        }
    }

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed}: todo 
            )
        );
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };


    return (
        <div>
            <h2>To do List</h2>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add new todo"
            />
            <button onClick={() => {addTodo(input); setInput("");} } >Add</button>
            <ul>
                {todos.map((todo) => {
                    <li key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                    >
                        {todo.text}

                        <button onClick={(e) => { e.stopPropagation();}}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default TodoList;
