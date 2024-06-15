import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const AddTask = ({ todoList, setTodoList }) => {
    const [newTask, setNewTask] = useState("");

    const onTextChange = (evt) => {
        const text = evt.target.value;
        setNewTask(text);
    }

    const addTask = () => {
        const newId = todoList.length !== 0 ? todoList[todoList.length - 1].id + 1 : 1;
        const newTaskItem = { id: newId, descr: newTask, checked: false };
        const newTaskList = [...todoList, newTaskItem];
        setTodoList(newTaskList);
        setNewTask(""); // Clear the input field after adding the task
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTask(); // Call addTask when the form is submitted
    }

    return (
        <form className="form-group" onSubmit={(evt) => handleSubmit(evt)}>
            <div className="input-group mb-3">
                <input 
                    type="text"
                    autoFocus
                    className="form-control"
                    required
                    placeholder="Add Task"
                    id="taskLabel"
                    value={newTask}
                    onChange={(evt) => { onTextChange(evt) }}
                />
                <Button type="submit" className="btn-primary">
                    <FaPlus role="button" />
                </Button>
            </div>
        </form>
    );
}

export default AddTask;
