import Icon from "../../components/Icon";
import { daysUntil, formatDate } from "../../utils/date";

function TasksPanel({ tasks, onNavigate, onAddTask, onToggleTask }) {
  const visible = tasks.slice(0, 3);
  return (
    <div className="panel tasks-panel">
      <div className="panel-heading">
        <div>
          <span className="panel-kicker">YOUR NEXT MOVES</span>
          <h2>Follow-up queue</h2>
        </div>
        <button className="text-link" onClick={() => onNavigate("tasks")}>
          All tasks <Icon name="arrow" size={15} />
        </button>
      </div>
      <div className="task-list">
        {visible.map((task) => (
          <button className="task-row" key={task.id} onClick={() => onToggleTask(task)}>
            <span className={`task-check ${task.status === "Done" ? "task-checked" : ""}`}>
              {task.status === "Done" && "✓"}
            </span>
            <span className="task-copy">
              <strong>{task.title}</strong>
              <small>{task.related}</small>
            </span>
            <span className="task-date">
              {daysUntil(task.due) === 0 ? "Today" : formatDate(task.due)}
            </span>
          </button>
        ))}
        {visible.length === 0 && (
          <div className="empty-inline">
            You’re all caught up. Add a follow-up when you need one.
          </div>
        )}
      </div>
      <button className="add-task-link" onClick={onAddTask}>
        <Icon name="plus" size={15} />
        Add a follow-up
      </button>
    </div>
  );
}

export default TasksPanel;
