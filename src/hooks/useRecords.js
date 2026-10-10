import { useEffect, useState } from "react";
import { loadRecords, saveRecords } from "../utils/storage";

const normalize = (type, item) => {
  const next = { ...item };
  if (type === "leads" || type === "policies")
    next.premium = Number(next.premium) || 0;
  if (type === "payments") {
    next.amount = Number(next.amount) || 0;
    next.paid = Number(next.paid) || 0;
    if (next.paid >= next.amount) next.status = "Paid";
    else if (next.paid > 0) next.status = "Part paid";
  }
  return next;
};

export function useRecords() {
  const [records, setRecords] = useState(loadRecords);

  useEffect(() => saveRecords(records), [records]);

  const saveRecord = (type, values, existing = null) => {
    const item = normalize(type, {
      ...values,
      id: existing?.id || `${type.slice(0, 2)}-${Date.now()}`,
    });
    setRecords((current) => ({
      ...current,
      [type]: existing
        ? current[type].map((row) => (row.id === item.id ? item : row))
        : [item, ...current[type]],
    }));
  };

  const toggleTask = (task) =>
    setRecords((current) => ({
      ...current,
      tasks: current.tasks.map((row) =>
        row.id === task.id
          ? { ...row, status: row.status === "Done" ? "Open" : "Done" }
          : row,
      ),
    }));

  return { records, saveRecord, toggleTask };
}
