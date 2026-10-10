import Icon from "../../components/Icon";
import { daysUntil } from "../../utils/date";

const asDate = (value) => new Date(`${value}T00:00:00`);

function RenewalsPanel({ renewalPolicies, onNavigate }) {
  return (
    <div className="panel renewals-panel">
      <div className="panel-heading">
        <div>
          <span className="panel-kicker">DON’T MISS A DATE</span>
          <h2>Coming up</h2>
        </div>
        <button className="text-link" onClick={() => onNavigate("renewals")}>
          All renewals <Icon name="arrow" size={15} />
        </button>
      </div>
      <div className="renewal-list">
        {renewalPolicies.slice(0, 4).map((policy) => {
          const days = daysUntil(policy.expiry);
          const date = asDate(policy.expiry);
          return (
            <button
              className="renewal-row"
              key={policy.id}
              onClick={() => onNavigate("renewals")}
            >
              <span className="renewal-date">
                <strong>{date.getDate()}</strong>
                <small>
                  {new Intl.DateTimeFormat("en-IN", { month: "short" })
                    .format(date)
                    .toUpperCase()}
                </small>
              </span>
              <span className="renewal-info">
                <strong>{policy.customer}</strong>
                <small>
                  {policy.vehicle} · {policy.insurer}
                </small>
              </span>
              <span className={`renewal-days ${days < 0 ? "renewal-late" : ""}`}>
                {days < 0 ? "Overdue" : days === 0 ? "Today" : `${days}d`}
              </span>
            </button>
          );
        })}
        {renewalPolicies.length === 0 && (
          <div className="empty-inline">No upcoming renewals in the next 60 days.</div>
        )}
      </div>
      <button className="renewal-foot" onClick={() => onNavigate("renewals")}>
        <Icon name="calendar" size={16} />
        {renewalPolicies.length} renewals in your next 60 days
        <Icon name="arrow" size={15} />
      </button>
    </div>
  );
}

export default RenewalsPanel;
