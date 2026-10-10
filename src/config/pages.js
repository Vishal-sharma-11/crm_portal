export const ALL_STATUSES = "All statuses";

export const pageTitles = {
  dashboard: "Overview",
  leads: "Leads",
  customers: "Customers",
  policies: "Policies",
  renewals: "Renewals",
  payments: "Payments",
  tasks: "Follow-ups",
};

// Singular, lower-case name per record type (buttons, dialog titles, toasts)
export const entityLabels = {
  leads: "lead",
  customers: "customer",
  policies: "policy",
  payments: "payment",
  tasks: "follow-up",
};

const descriptions = {
  leads: "Keep every new enquiry moving toward cover.",
  customers: "People and vehicles your agency looks after.",
  policies: "A clear view of active motor cover.",
  renewals: "Policies approaching expiry, in date order.",
  payments: "Premiums received and still outstanding.",
  tasks: "Calls, documents and follow-ups to keep things moving.",
};

export const getPageDescription = (page, count) =>
  `${count} ${count === 1 ? "record" : "records"} · ${descriptions[page]}`;

// Which collection the "Add" button / dialog works on for a given page
export const getFormType = (page) =>
  page === "renewals" ? "policies" : page === "dashboard" ? "leads" : page;

export const getDefaultStatus = (type) =>
  ({ policies: "Active", tasks: "Open", payments: "Pending" })[type] || "New";
