import React, { useState } from 'react';
import { format } from 'date-fns';
import useList from '../hooks/useList';
import Task from '../models/Task.model';

const TaskList = () => {
    const {
        tasks,
        addTask,
        sortByDates,
        reverseDates,
        clean,
    } = useList([]);

    const [textTask, setTextTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(new Task(textTask));
        setTextTask('');
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task text: </label>
        <input id="task" value={textTask} onChange={(e) => setTextTask(e.target.value)} />
        <button type="submit">Add new task</button>
      </form>
      {tasks.length === 0 ? (<p>No tasks</p>) : (
            tasks.map((task) => (
              <div key={task.id}>
                text:
                {' '}
                {task.text}
                {' '}
                - created at:
                {format(task.createdAt, 'dd/MM/yyyy hh:mm:ss')}
              </div>
            ))
        )}
      <h3>Actions</h3>
      <button type="button" onClick={sortByDates}>Asc order by created date</button>
      <button type="button" onClick={reverseDates}>Reverse order by created date</button>
      <button type="button" onClick={clean}>Clean</button>
    </div>
  );
};

export default TaskList;
