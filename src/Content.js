import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import AddTask from './AddTask';
import SearchTask from './SearchTask';

const Content = (props) => {
    // Retrieve the todoList from local storage or initialize it as an empty array
    const [todoList, setTodoList] = useState(() => {
        const savedTodos = localStorage.getItem('todoList');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Save the todoList to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    // Handle the change event for the checkbox
    const handleChange = (id) => {
        const newTodoList = todoList.map((row) =>
            row.id === id ? { ...row, checked: !row.checked } : row
        );
        setTodoList(newTodoList);
    };

    // Handle the delete event for a todo item
    const handleDelete = (id) => {
        const newTodoList = todoList.filter((row) => row.id !== id);
        setTodoList(newTodoList);
    };

    // Filter the todoList based on the search query
    const filteredTodoList = todoList.filter((item) =>
        item.descr.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="container-flex">
            <AddTask 
                todoList={todoList}
                setTodoList={setTodoList}
            /> 
            <SearchTask 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul className="list-group">
                {filteredTodoList.map((item) => (
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
