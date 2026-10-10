export const columns = {
  leads: [["name", "Enquiry"], ["vehicle", "Vehicle"], ["phone", "Phone"], ["source", "Source"], ["premium", "Est. premium"], ["status", "Stage"]],
  customers: [["name", "Customer"], ["vehicle", "Vehicle"], ["phone", "Phone"], ["email", "Email"], ["city", "City"]],
  policies: [["policyNo", "Policy"], ["customer", "Customer"], ["vehicle", "Vehicle"], ["insurer", "Insurer"], ["premium", "Premium"], ["expiry", "Expiry"], ["status", "Status"]],
  renewals: [["policyNo", "Policy"], ["customer", "Customer"], ["vehicle", "Vehicle"], ["insurer", "Insurer"], ["premium", "Premium"], ["expiry", "Expires in"], ["status", "Status"]],
  payments: [["customer", "Customer"], ["policyNo", "Reference"], ["amount", "Amount due"], ["paid", "Received"], ["dueDate", "Due date"], ["status", "Status"]],
  tasks: [["title", "Follow-up"], ["related", "Customer / vehicle"], ["due", "Due date"], ["priority", "Priority"], ["status", "Status"]],
};
