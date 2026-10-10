import { daysUntil } from "./date";

export const getRenewalPolicies = (policies) =>
  policies
    .filter((policy) => {
      const remaining = daysUntil(policy.expiry);
      return remaining >= -15 && remaining <= 60;
    })
    .sort((a, b) => a.expiry.localeCompare(b.expiry));

export const getDueSoonCount = (policies) =>
  policies.filter((p) => daysUntil(p.expiry) >= 0 && daysUntil(p.expiry) <= 30)
    .length;

export const getOutstanding = (payments) =>
  payments.reduce(
    (sum, p) => sum + Math.max(0, Number(p.amount) - Number(p.paid)),
    0,
  );

export const getActivePolicyCount = (policies) =>
  policies.filter((p) => p.status !== "Expired").length;

export const getPremiumTotal = (policies) =>
  policies.reduce((sum, p) => sum + Number(p.premium || 0), 0);
