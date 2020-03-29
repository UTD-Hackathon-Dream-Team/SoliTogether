import React, { useState } from 'react';

import NewTask from './NewTask';
import TaskList from './TaskList';
import '../Resources/Resources.css';
import './Task.css';

const Task = () => {
    const [tasks, setTasks] = useState([{
        description: "drink water",
        repeats: true,
        count: 2,
        reminderTime: "7pm"
    }]);

    const addNewTask = (newTask) => {
        setTasks((prevTasks) => {
          return prevTasks.concat(newTask);
        });
    }

    const increaseCount = (desc) => {
        console.log("called")
        const objIndex = tasks.findIndex((obj => obj.description === desc));
        setTasks((prevTasks) => {
            prevTasks[objIndex].count = prevTasks[objIndex].count++;
            return prevTasks;
        });
    }

    return(
        <div>
            <div className="intro-bar">
                <h1>🌟 Keep Motivated 🌟</h1>
            </div>
            <div className="intro-desc">
                <h1>Set Daily Tasks</h1>
            </div>
            <div className="task-list">
                <NewTask onAddTask={addNewTask}/>
                <TaskList items={tasks} increaseCount={increaseCount}/>
            </div>
        </div>
    );
};

export default Task;