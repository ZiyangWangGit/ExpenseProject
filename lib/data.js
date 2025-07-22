// data.js
import { Users, CreditCard, PieChart, Bell, Receipt } from "lucide-react";

// Main features data for the features section
export const FEATURES = [
  {
    title: "Group Expenses",
    Icon: Users,
    bg: "bg-green-100",
    color: "text-green-600",
    description: "Create groups for roommates, trips, or events to keep expenses organized.",
  },
  {
    title: "Smart Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description: "Our algorithm minimizes the number of payments when settling up.",
  },
  {
    title: "Expense Analytics",
    Icon: PieChart,
    bg: "bg-green-100",
    color: "text-green-600",
    description: "Track spending patterns and discover insights about your shared costs.",
  },
  {
    title: "Payment Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description: "Automated reminders for pending debts.",
  },
  {
    title: "Multiple Split Types",
    Icon: Receipt,
    bg: "bg-green-100",
    color: "text-green-600",
    description: "Split equally, by percentage, or by exact amounts.",
  }
];

// Step-by-step instructions for how the app works
export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Create a Group",
    description: "Start a group for your roommates, trip, or event"
  },
  {
    step: "2",
    title: "Add Expenses",
    description: "Record who paid and how to split each bill"
  },
  {
    step: "3",
    title: "Settle Up",
    description: "See who owes what and mark payments"
  }
];