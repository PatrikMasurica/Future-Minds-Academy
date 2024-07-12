import React, { useState } from 'react';

function ToDoItem({ task, index, toggleCompleted, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);
    const [editedDate, setEditedDate] = useState(task.datetime)
    const [editedColor, setEditedColor] = useState(task.color);

    const handleSave = () => {
        updateTask(index, {
            task: editedTask,
            datetime: editedDate,
            color: editedColor,
            isCompleted: task.isCompleted,
        });
        setIsEditing(false);
    };
    return (
        <>

            <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.color }}>
                {
                    isEditing ? (
                        <div>
                            <div className="form-group">
                                <label for="task">Task</label>
                                <input type="text" id="task" name="task" placeholder="Enter your task..." value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="datetime">Date and Time</label>
                                <input type="datetime-local" id="datetime" name="datetime" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
                            </div>
                            <div className="row form-group-row">
                                <div className="form-group checkbox-wrapper">Important
                                    <input type="checkbox" id="important" name="important" />
                                    <label for="important">
                                        <span className="tick_mark"></span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label for="color">Color</label>
                                    <input type="color" id="color" name="color" value={editedColor} onChange={(e) => setEditedColor(e.target.value)} />
                                </div>
                                <div className="task-icones">
                                    <span className="material-icons cancel" onClick={() => setIsEditing(false)}>block</span>
                                    <span className="material-icons save" onClick={() => handleSave(index)} >save</span>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <div>
                            {task.task} - {task.datetime}
                            {task.isImportant && <strong> (Important) </strong>}

                            <div className="task-icones">
                                <span className="material-icons cancel" onClick={() => setIsEditing(true)}>block</span>
                                <span className="material-icons save" onClick={() => toggleCompleted(index)} >save</span>
                            </div>
                        </div>
                    )}

            </li >
        </>
    );
};


export default ToDoItem