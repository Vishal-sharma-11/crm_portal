import Icon from "./Icon";
import RecordsTable from "./RecordsTable";
import { ALL_STATUSES, entityLabels, getFormType, getPageDescription, pageTitles } from "../config/pages";

function ListPage({
  page,
  rows,
  query,
  onQueryChange,
  statusFilter,
  onStatusFilterChange,
  onAdd,
  onEdit,
  onToggleTask,
}) {
  const title = pageTitles[page];
  const formType = getFormType(page);

  const statuses = [...new Set(rows.map((r) => r.status).filter(Boolean))];
  const visibleRows = rows.filter(
    (item) =>
      Object.values(item).join(" ").toLowerCase().includes(query.toLowerCase()) &&
      (statusFilter === ALL_STATUSES || item.status === statusFilter),
  );

  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">YOUR BOOK OF BUSINESS</div>
          <h1>{title}</h1>
          <p>{getPageDescription(page, rows.length)}</p>
        </div>
        <button className="primary-button" onClick={() => onAdd(formType)}>
          <Icon name="plus" size={17} />
          Add {entityLabels[formType]}
        </button>
      </section>

      <section className="table-panel">
        <div className="table-toolbar">
          <div className="table-total">
            <strong>{rows.length}</strong> records <span className="table-live-dot" />
          </div>
          <div className="table-tools">
            <label className="table-search">
              <Icon name="search" size={16} />
              <input
                aria-label={`Search ${title}`}
                placeholder={`Search ${title.toLowerCase()}...`}
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
              />
            </label>
            <select
              aria-label="Filter by status"
              className="filter-select"
              value={statusFilter}
              onChange={(event) => onStatusFilterChange(event.target.value)}
            >
              <option>{ALL_STATUSES}</option>
              {statuses.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
        <RecordsTable
          type={page}
          rows={visibleRows}
          onEdit={onEdit}
          onToggleTask={onToggleTask}
        />
      </section>
    </>
  );
}

export default ListPage;
