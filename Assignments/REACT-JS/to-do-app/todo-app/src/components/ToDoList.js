export default function ToDoList({ tasks, removeTask }) {
    return (
        <>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li>
                            {task}
                            <button onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}