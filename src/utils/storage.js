import { initialRecords } from "../data/initialRecords";

const STORAGE_KEY = "milepost-crm-records";

export const loadRecords = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? { ...initialRecords(), ...JSON.parse(saved) }
      : initialRecords();
  } catch {
    return initialRecords();
  }
};

export const saveRecords = (records) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch {
    /* storage unavailable or full: keep running in memory */
  }
};
