import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };


    const toggleTaskCompletion = (taskId) => { 
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() } : task
        ));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask, toggleTaskCompletion }}>
        {children}
        </TaskContext.Provider>
    );
};