import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ListPage from "./components/ListPage";
import RecordDialog from "./components/RecordDialog";
import PageFooter from "./components/PageFooter";
import Toast from "./components/Toast";
import Dashboard from "./pages/Dashboard/Dashboard";

import { useRecords } from "./hooks/useRecords";
import { useToast } from "./hooks/useToast";
import { useRecordDialog } from "./hooks/useRecordDialog";
import { ALL_STATUSES, entityLabels } from "./config/pages";
import { capitalize } from "./utils/format";
import { getDueSoonCount, getRenewalPolicies } from "./utils/selectors";

function App() {
  const { records, saveRecord, toggleTask } = useRecords();
  const { notice, showNotice } = useToast();
  const dialog = useRecordDialog();

  const [activePage, setActivePage] = useState("dashboard");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState(ALL_STATUSES);

  const renewalPolicies = getRenewalPolicies(records.policies);
  const dueSoon = getDueSoonCount(records.policies);
  const rows = activePage === "renewals" ? renewalPolicies : records[activePage] || [];

  const navigate = (page) => {
    setActivePage(page);
    setQuery("");
    setStatusFilter(ALL_STATUSES);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { type, item } = dialog.modal;
    saveRecord(type, dialog.formValues, item);
    dialog.closeForm();
    showNotice(item ? "Changes saved" : `${capitalize(entityLabels[type])} added`);
  };

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} dueSoon={dueSoon} onNavigate={navigate} />

      <main className="main-area">
        <Topbar activePage={activePage} query={query} onQueryChange={setQuery} />

        <div className="content-wrap">
          {activePage === "dashboard" ? (
            <Dashboard
              records={records}
              dueSoon={dueSoon}
              renewalPolicies={renewalPolicies}
              onNavigate={navigate}
              onAdd={dialog.openForm}
              onToggleTask={toggleTask}
            />
          ) : (
            <ListPage
              page={activePage}
              rows={rows}
              query={query}
              onQueryChange={setQuery}
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
              onAdd={dialog.openForm}
              onEdit={dialog.openForm}
              onToggleTask={toggleTask}
            />
          )}
          <PageFooter />
        </div>
      </main>

      {dialog.modal && (
        <RecordDialog
          type={dialog.modal.type}
          item={dialog.modal.item}
          values={dialog.formValues}
          setValues={dialog.setFormValues}
          onClose={dialog.closeForm}
          onSubmit={handleSubmit}
        />
      )}
      <Toast message={notice} />
    </div>
  );
}

export default App;
