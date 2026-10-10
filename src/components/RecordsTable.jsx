import Icon from "./Icon";
import Status from "./Status";
import { columns } from "../config/columns";
import { daysUntil, formatDate } from "../utils/date";
import { formatMoney, getInitials } from "../utils/format";

const MONEY_KEYS = ["premium", "amount", "paid"];
const DATE_KEYS = ["expiry", "due", "dueDate"];

function renderValue(type, item, key) {
  if (MONEY_KEYS.includes(key)) return formatMoney(item[key]);
  if (key === "expiry" && type === "renewals") {
    const days = daysUntil(item.expiry);
    return days < 0
      ? `${Math.abs(days)} days overdue`
      : days === 0
        ? "Today"
        : `${days} days`;
  }
  if (DATE_KEYS.includes(key)) return formatDate(item[key]);
  return item[key] || "—";
}

function Cell({ type, item, columnKey }) {
  if (columnKey === "status" || columnKey === "priority")
    return <Status value={item[columnKey]} />;
  if (columnKey === "name")
    return (
      <span className="table-name">
        <span className="table-initials">{getInitials(item.name)}</span>
        {item.name}
      </span>
    );
  return renderValue(type, item, columnKey);
}

function RecordsTable({ type, rows, onEdit, onToggleTask }) {
  const headers = columns[type] || [];

  return (
    <div className="records-scroll">
      <table className="records-table">
        <thead>
          <tr>
            {headers.map(([key, label]) => (
              <th key={key}>{label}</th>
            ))}
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              {headers.map(([key], index) => (
                <td key={key} className={index === 0 ? "first-cell" : ""}>
                  <Cell type={type} item={item} columnKey={key} />
                </td>
              ))}
              <td className="action-cell">
                {type === "tasks" ? (
                  <button
                    className="table-action"
                    title={item.status === "Done" ? "Reopen follow-up" : "Mark complete"}
                    onClick={() => onToggleTask(item)}
                  >
                    <Icon name="check" size={16} />
                  </button>
                ) : (
                  <button
                    className="table-action"
                    title="Edit record"
                    onClick={() => onEdit(type === "renewals" ? "policies" : type, item)}
                  >
                    <Icon name="more" size={17} />
                  </button>
                )}
              </td>
            </tr>
          ))}
          {!rows.length && (
            <tr>
              <td colSpan={headers.length + 1} className="empty-table">
                <span className="empty-mark">
                  <Icon name="search" size={18} />
                </span>
                <strong>No records found</strong>
                <span>Try another search or add a new record.</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecordsTable;
