import Icon from "./Icon";
import { pageTitles } from "../config/pages";

function Topbar({ activePage, query, onQueryChange }) {
  return (
    <header className="topbar">
      <div className="crumb">
        <span>Workspace</span>
        <Icon name="chevron" size={14} />
        <strong>{pageTitles[activePage]}</strong>
      </div>
      <div className="topbar-actions">
        <label className="search-box">
          <Icon name="search" size={17} />
          <input
            aria-label="Search records"
            placeholder="Search customers, vehicles..."
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification-button" title="Notifications">
          <Icon name="bell" size={18} />
          <span />
        </button>
        <div className="top-avatar" aria-label="Vishal Shah">
          VS
        </div>
      </div>
    </header>
  );
}

export default Topbar;
