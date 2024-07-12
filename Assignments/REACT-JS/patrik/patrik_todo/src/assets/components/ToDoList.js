import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, toggleCompleted, updateTask, filterTasks }) {
    return (
        <>


            <div>
                <div class="button-group">
                    <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('all')} >All</button>
                    <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('today')} >Today</button>
                    <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('tomorrow')} >Tomorrow</button>
                    <button type="button" class="btn btn-primary-outline btn-all" onClick={() => filterTasks('yesterday')} >Yesterday</button>
                </div>
                <ul id="task-list" className="row-direction">
                    {tasks.map((task, index) => (
                        <ToDoItem
                            key={index}
                            task={task}
                            index={index}
                            toggleCompleted={toggleCompleted}
                            updateTask={updateTask}
                        />
                    ))}
                </ul>
            </div>

        </>
    )
}
export default ToDoList