import { useState } from "react";

export default function ToDoForm({ addTask }) {

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() && date && time) {
            addTask(task, date, time);
            setTask('');
            setDate('')
            setTime('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}