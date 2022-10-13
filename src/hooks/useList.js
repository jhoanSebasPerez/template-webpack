import { useState } from 'react';
import { compareDesc, compareAsc } from 'date-fns';

const useList = (initialValue = []) => {
    const [tasks, setTasks] = useState(initialValue);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const clean = () => {
        setTasks([]);
    };

    const sortByDates = () => {
        const orderedTasks = [...tasks];
        orderedTasks.sort((a, b) => compareAsc(a.createdAt, b.createdAt));
        setTasks(orderedTasks);
    };

    const reverseDates = () => {
        const reverseTasks = [...tasks];
        reverseTasks.sort((a, b) => compareDesc(a.createdAt, b.createdAt));
        setTasks(reverseTasks);
    };

    return {
        tasks, addTask, removeTask, clean, sortByDates, reverseDates,
    };
};

export default useList;
