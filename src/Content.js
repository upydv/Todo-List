import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import AddTask from './AddTask';

const Content = (props) => {
    // Properly initialize the todoList state with useState
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            descr: "Pray to God",
            checked: false
        },
        {
            id: 2,
            descr: "Breakfast",
            checked: false
        },
        {
            id: 3,
            descr: "Lunch",
            checked: false
        },
        {
            id: 4,
            descr: "Dinner",
            checked: false
        }
    ]);

    // Handle the change event for the checkbox
    const handleChange = (id) => {
        const newTodoList = todoList.map((row) =>
            row.id === id ? { ...row, checked: !row.checked } : row
        );
        setTodoList(newTodoList);
        localStorage.setItem('todoList',JSON.stringify(newTodoList))
    };

    // Handle the delete event for a todo item
    const handleDelete = (id) => {
        const newTodoList = todoList.filter((row) => row.id !== id);
        setTodoList(newTodoList);
        localStorage.setItem('todoList',JSON.stringify(newTodoList))
    };

    return (
        <main className="container-flex">
                <AddTask 
                todoList={todoList}
                setTodoList={setTodoList}
                /> 
            <ul className="list-group">
                 
                {todoList.map((item) => (
                    <li key={item.id} className="list-group-item d-flex align-items-center">
                        <input 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleChange(item.id)}
                            className="me-2 form-check-input"
                        />
                        <label className='col-11'>{item.descr}</label>
                        
                        <FaTrashAlt 
                            role="button" 
                            className="ms-auto" 
                            onClick={() => handleDelete(item.id)} 
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Content;
