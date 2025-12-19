import { useState } from "react";
import styles from '../styles/AddTask.module.css';

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
            <form className={styles.inputform} onSubmit={handleSubmit}>
                <label>
                    Task:
                    <input type="text"
                        value={task.todo}
                        onChange={handleChange} />
                </label>
                <button className={styles.abutton} onClick={() => handleSubmit}>Add task</button>

            </form>


            <div className={styles.tasklist}>
                <p className={styles.listheading}>Your current list of tasks:</p>
                <ul>
                {submittedTask.map((s, index) => (
                    <div key={index} className={styles.table}>
                        <li>

                            {s.todo}
                            {s.completed ? ' (task completed) ' : ' (task not completed) '}
                            <label>

                                <input type="checkbox" className={styles.cb}
                                    checked={s.completed}
                                    onChange={() => completeTask(index)}
                                />
                            </label>
                            <button class={styles.rbutton} onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    </div>
                ))}
                </ul>
            </div>

        </>


);

}

export default AddTask
