export const plusDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
};

export const formatDate = (value) =>
  value
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(`${value}T00:00:00`))
    : "—";

export const daysUntil = (value) =>
  Math.ceil(
    (new Date(`${value}T00:00:00`) - new Date(new Date().toDateString())) /
      86400000,
  );
