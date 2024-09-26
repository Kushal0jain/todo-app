// components/TaskList.js
import React from "react";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status ? "Completed" : "Pending"}</p>
          <button
            onClick={() =>
              onUpdate(task._id, { ...task, status: !task.status })
            }
          >
            {task.status ? "Mark as Pending" : "Mark as Completed"}
          </button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
