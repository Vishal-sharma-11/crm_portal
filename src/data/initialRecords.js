import { plusDays } from "../utils/date";

export const initialRecords = () => ({
  leads: [
    { id: "l1", name: "Aarav Mehta", phone: "+91 98765 43210", vehicle: "Hyundai Creta", source: "Referral", status: "Quote sent", premium: 18400 },
    { id: "l2", name: "Neha Kapoor", phone: "+91 98110 22334", vehicle: "Maruti Baleno", source: "Website", status: "New", premium: 12600 },
    { id: "l3", name: "Rohan Desai", phone: "+91 98200 11223", vehicle: "Honda City", source: "Renewal call", status: "Contacted", premium: 22100 },
    { id: "l4", name: "Priya Nair", phone: "+91 98470 55667", vehicle: "Tata Nexon EV", source: "Walk-in", status: "New", premium: 29800 },
  ],
  customers: [
    { id: "c1", name: "Ishaan Shah", phone: "+91 98980 12121", email: "ishaan.shah@email.com", vehicle: "Kia Seltos", city: "Ahmedabad" },
    { id: "c2", name: "Ananya Rao", phone: "+91 98450 99887", email: "ananya.rao@email.com", vehicle: "Toyota Glanza", city: "Bengaluru" },
    { id: "c3", name: "Kabir Malhotra", phone: "+91 98100 44556", email: "kabir.m@email.com", vehicle: "Mahindra XUV700", city: "New Delhi" },
    { id: "c4", name: "Meera Iyer", phone: "+91 99620 33445", email: "meera.iyer@email.com", vehicle: "Honda Amaze", city: "Chennai" },
  ],
  policies: [
    { id: "p1", policyNo: "MTR-2026-0842", customer: "Ishaan Shah", vehicle: "Kia Seltos", insurer: "HDFC ERGO", premium: 24850, expiry: plusDays(5), status: "Renewal due" },
    { id: "p2", policyNo: "MTR-2026-0791", customer: "Ananya Rao", vehicle: "Toyota Glanza", insurer: "ICICI Lombard", premium: 16320, expiry: plusDays(12), status: "Renewal due" },
    { id: "p3", policyNo: "MTR-2026-0638", customer: "Kabir Malhotra", vehicle: "Mahindra XUV700", insurer: "Bajaj Allianz", premium: 34200, expiry: plusDays(24), status: "Active" },
    { id: "p4", policyNo: "MTR-2026-0594", customer: "Meera Iyer", vehicle: "Honda Amaze", insurer: "Tata AIG", premium: 14200, expiry: plusDays(42), status: "Active" },
    { id: "p5", policyNo: "MTR-2026-0316", customer: "Vikram Joshi", vehicle: "Volkswagen Taigun", insurer: "HDFC ERGO", premium: 28100, expiry: plusDays(186), status: "Active" },
  ],
  payments: [
    { id: "pay1", customer: "Aarav Mehta", policyNo: "Quote pending", amount: 18400, paid: 0, dueDate: plusDays(0), status: "Pending" },
    { id: "pay2", customer: "Ishaan Shah", policyNo: "MTR-2026-0842", amount: 24850, paid: 12000, dueDate: plusDays(2), status: "Part paid" },
    { id: "pay3", customer: "Ananya Rao", policyNo: "MTR-2026-0791", amount: 16320, paid: 0, dueDate: plusDays(5), status: "Pending" },
  ],
  tasks: [
    { id: "t1", title: "Call Ishaan about renewal", related: "Ishaan Shah · Kia Seltos", due: plusDays(0), priority: "High", status: "Open" },
    { id: "t2", title: "Share revised quote", related: "Aarav Mehta · Hyundai Creta", due: plusDays(0), priority: "Normal", status: "Open" },
    { id: "t3", title: "Request RC copy", related: "Priya Nair · Tata Nexon EV", due: plusDays(1), priority: "Normal", status: "Open" },
  ],
});
