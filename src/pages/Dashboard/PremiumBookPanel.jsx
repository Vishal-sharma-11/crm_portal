import Icon from "../../components/Icon";
import { formatMoney } from "../../utils/format";

const CHART_VALUES = [42, 62, 48, 76, 57, 88, 69, 96, 72, 84, 63, 100];
const MONTHS = ["Jan", "Mar", "May", "Jul", "Sep", "Dec"];

function PremiumBookPanel({ premiumTotal, onNavigate }) {
  return (
    <div className="panel book-panel">
      <div className="panel-heading">
        <div>
          <span className="panel-kicker">PORTFOLIO</span>
          <h2>Premium book</h2>
        </div>
        <button className="text-link" onClick={() => onNavigate("policies")}>
          View policies <Icon name="arrow" size={15} />
        </button>
      </div>
      <div className="book-total">
        <strong>{formatMoney(premiumTotal)}</strong>
        <span>
          <Icon name="trend" size={15} /> Annual premium
        </span>
      </div>
      <div className="bar-chart" aria-label="Illustrative monthly premium trend">
        {CHART_VALUES.map((height, index) => (
          <div
            className={`chart-bar ${index === 9 ? "chart-bar-highlight" : ""}`}
            key={index}
            style={{ "--bar-height": `${height}%`, "--bar-delay": `${index * 35}ms` }}
          >
            <span />
          </div>
        ))}
      </div>
      <div className="chart-months">
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="chart-note">
        <span className="chart-legend" /> Monthly premium activity <span>Demo trend</span>
      </div>
    </div>
  );
}

export default PremiumBookPanel;
