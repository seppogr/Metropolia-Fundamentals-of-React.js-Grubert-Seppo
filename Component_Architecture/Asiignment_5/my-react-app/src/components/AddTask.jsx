import { useState } from "react";

function AddTask () {
    const [submittedTask, setSubmittedTask] = useState([])

    const [task, setTask] = useState({
        todo: "task",
        completed: false
    });

        const handleChange = (e) => {
        const target = e.target;
        let value;
        let text;
        if (target.type === 'checkbox') {

            if (target.checked) {
                value = true;
            }
            else {
                value = false;
            }
            setTask(prev => ({...prev, completed: value}))
        }

        if (target.type === 'text') {
            text = target.value;
            setTask(prev => ({...prev, todo: text}))
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedTask((prev) => [...prev, task]);

        setTask({todo: "", completed: false})
    }

    function removeTask(index) {
        let divsArray = [...submittedTask]
        divsArray.splice(index, 1);
        setSubmittedTask(divsArray);
    }

const completeTask = (index) => {
    setSubmittedTask((prev) => {
        const tasks = [...prev];
        const taskToBeUpdated = tasks[index];
        tasks[index] = { ...taskToBeUpdated, completed: !taskToBeUpdated.completed};
        return tasks;
    });
}
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    task:
                    <input type="text"
                        value={task.todo}
                        onChange={handleChange} />
                </label>

                <input type="submit" />
            </form>


            <div>
                {submittedTask.map((s, index) => (
                    <div key={index}>
                        {s.todo}
                        {s.completed ? ' task completed ' : ' task not completd '}

                            <label>
                                <input type="checkbox"
                                checked={s.completed}
                                    onChange={() => completeTask(index)}
                                />
                            </label>

                        <button onClick={() => removeTask(index)}>Remove</button>
                    </div>
                ))}
            </div>

        </>


);

}

export default AddTask
