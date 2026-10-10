import Icon from "../../components/Icon";
import Status from "../../components/Status";
import { formatMoney, getInitials } from "../../utils/format";

function LeadsPanel({ leads, onNavigate }) {
  return (
    <div className="panel leads-panel">
      <div className="panel-heading">
        <div>
          <span className="panel-kicker">PIPELINE</span>
          <h2>Recent enquiries</h2>
        </div>
        <button className="text-link" onClick={() => onNavigate("leads")}>
          All leads <Icon name="arrow" size={15} />
        </button>
      </div>
      <div className="lead-list">
        {leads.slice(0, 4).map((lead, index) => (
          <button className="lead-row" key={lead.id} onClick={() => onNavigate("leads")}>
            <span className={`lead-avatar lead-avatar-${index % 4}`}>
              {getInitials(lead.name)}
            </span>
            <span className="lead-person">
              <strong>{lead.name}</strong>
              <small>
                <Icon name="car" size={13} />
                {lead.vehicle || "Vehicle not added"}
              </small>
            </span>
            <span className="lead-source">{lead.source}</span>
            <Status value={lead.status} />
            <span className="lead-premium">{formatMoney(lead.premium)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LeadsPanel;
