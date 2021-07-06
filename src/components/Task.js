import { FaTimes } from "react-icons/fa";

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(task.id)}
      className="card bg-dark  text-white border border-secondary border-2"
    >
      <div className="card-body">
        <h3 className="card-title">
          {task.text}
          <FaTimes
            onClick={() => onDelete(task.id)}
            style={{ color: "red", cursor: "pointer" }}
          />
        </h3>
        <p className="card-text">{task.day}</p>
        <p className="card-text">{task.reminder ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};
