import Icon from "./Icon";

function MetricCard({ label, value, detail, icon, color }) {
  return (
    <article className="metric-card">
      <div className="metric-top">
        <span>{label}</span>
        <span className={`metric-icon metric-icon-${color}`}>
          <Icon name={icon} size={17} />
        </span>
      </div>
      <strong className="metric-value">{value}</strong>
      <span className="metric-detail">{detail}</span>
    </article>
  );
}

export default MetricCard;
