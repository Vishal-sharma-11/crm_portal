import Icon from "../../components/Icon";
import MetricCard from "../../components/MetricCard";
import PremiumBookPanel from "./PremiumBookPanel";
import RenewalsPanel from "./RenewalsPanel";
import LeadsPanel from "./LeadsPanel";
import TasksPanel from "./TasksPanel";
import { formatMoney } from "../../utils/format";
import { getActivePolicyCount, getOutstanding, getPremiumTotal } from "../../utils/selectors";

function Dashboard({ records, dueSoon, renewalPolicies, onNavigate, onAdd, onToggleTask }) {
  const today = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  const openLeads = records.leads.filter((l) => !["Won", "Lost"].includes(l.status));
  const newLeads = records.leads.filter((l) => l.status === "New");
  const unpaid = records.payments.filter((p) => p.status !== "Paid");
  const activeTasks = records.tasks.filter((t) => t.status !== "Done");

  return (
    <>
      <section className="welcome-row">
        <div>
          <div className="eyebrow">{today.toUpperCase()}</div>
          <h1>
            Good morning, Vishal<span className="heading-period">.</span>
          </h1>
          <p>Here’s what’s happening across your book today.</p>
        </div>
        <button className="primary-button" onClick={() => onAdd("leads")}>
          <Icon name="plus" size={17} />
          New enquiry
        </button>
      </section>

      <section className="metric-grid" aria-label="Business summary">
        <MetricCard
          label="Policies in force"
          value={getActivePolicyCount(records.policies)}
          detail="Across your motor book"
          icon="shield"
          color="green"
        />
        <MetricCard
          label="Renewals · 30 days"
          value={dueSoon}
          detail={dueSoon ? "A good time to reach out" : "You’re clear for now"}
          icon="refresh"
          color="amber"
        />
        <MetricCard
          label="Open enquiries"
          value={openLeads.length}
          detail={`${newLeads.length} new this week`}
          icon="users"
          color="blue"
        />
        <MetricCard
          label="Premium outstanding"
          value={formatMoney(getOutstanding(records.payments))}
          detail={`${unpaid.length} payments to follow up`}
          icon="wallet"
          color="coral"
        />
      </section>

      <section className="dashboard-grid">
        <PremiumBookPanel
          premiumTotal={getPremiumTotal(records.policies)}
          onNavigate={onNavigate}
        />
        <RenewalsPanel renewalPolicies={renewalPolicies} onNavigate={onNavigate} />
      </section>

      <section className="dashboard-grid lower-grid">
        <LeadsPanel leads={records.leads} onNavigate={onNavigate} />
        <TasksPanel
          tasks={activeTasks}
          onNavigate={onNavigate}
          onAddTask={() => onAdd("tasks")}
          onToggleTask={onToggleTask}
        />
      </section>
    </>
  );
}

export default Dashboard;
