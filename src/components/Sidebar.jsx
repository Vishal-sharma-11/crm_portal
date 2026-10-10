import Icon from "./Icon";
import { navigation } from "../config/navigation";

function Sidebar({ activePage, dueSoon, onNavigate }) {
  return (
    <aside className="sidebar">
      <a
        className="brand"
        href="#overview"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("dashboard");
        }}
      >
        <span className="brand-mark">
          <Icon name="car" size={21} />
        </span>
        <span className="brand-copy">
          <strong>milepost</strong>
          <small>INSURANCE DESK</small>
        </span>
      </a>

      <div className="workspace-label">WORKSPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <button
            className={`nav-item ${activePage === item.id ? "nav-item-active" : ""}`}
            key={item.id}
            onClick={() => onNavigate(item.id)}
          >
            <Icon name={item.icon} size={18} />
            <span>{item.label}</span>
            {item.id === "renewals" && dueSoon > 0 && (
              <span className="nav-count">{dueSoon}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="advisor-card">
          <div className="advisor-avatar">VS</div>
          <div className="advisor-details">
            <strong>Vishal Shah</strong>
            <span>Agency owner</span>
          </div>
          <button className="icon-button advisor-more" title="Advisor options">
            <Icon name="more" size={17} />
          </button>
        </div>
        <div className="sync-note">
          <span className="sync-dot" /> Demo workspace · saved on this device
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
