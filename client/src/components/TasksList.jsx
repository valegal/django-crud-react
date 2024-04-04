import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);
      useEffect(() => {

        async function loadTasks() {
          const res =  await getAllTasks()
          setTasks(res.data);
        }

        loadTasks();

      }, []);

       // Check if tasks is not yet fetched or empty to avoid errors
  if (!tasks || tasks.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}