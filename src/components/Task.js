export const Task = ({ task }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{task.text}</h3>
        <p className="card-text">{task.day}</p>
      </div>
    </div>
  );
};
