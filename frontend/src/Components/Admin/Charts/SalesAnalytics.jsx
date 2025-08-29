// src/components/SalesAnalytics.jsx
import { useState } from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";

// Sample datasets for Today, Weekly, Monthly
const todayData = [
  { day: "9 AM", current: 2000, previous: 1500 },
  { day: "12 PM", current: 4000, previous: 3000 },
  { day: "3 PM", current: 3500, previous: 2800 },
  { day: "6 PM", current: 5000, previous: 4200 },
];

const weeklyData = [
  { day: "Mon", current: 9000, previous: 0 },
  { day: "Tue", current: 18000, previous: 12000 },
  { day: "Wed", current: 20000, previous: 9000 },
  { day: "Thu", current: 25000, previous: 27000 },
  { day: "Fri", current: 22000, previous: 15000 },
  { day: "Sat", current: 30000, previous: 35000 },
  { day: "Sun", current: 19000, previous: 25000 },
];

const monthlyData = [
  { day: "Week 1", current: 65000, previous: 58000 },
  { day: "Week 2", current: 72000, previous: 64000 },
  { day: "Week 3", current: 81000, previous: 69000 },
  { day: "Week 4", current: 90000, previous: 72000 },
];

export default function SalesAnalytics() {
  const [activeTab, setActiveTab] = useState("Monthly");
  const chartData =
    activeTab === "Today"
      ? todayData
      : activeTab === "Weekly"
      ? weeklyData
      : monthlyData;

  return (
    <div className="bg-white shadow rounded-2xl p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Analytics</h2>
        <div className="flex space-x-2 text-sm">
          {["Today", "Weekly", "Monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-lg ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div>
          <p className="text-green-600 font-bold text-xl">$58,254</p>
          <p className="text-gray-500 text-sm">Current</p>
        </div>
        <div>
          <p className="text-blue-600 font-bold text-xl">$69,524</p>
          <p className="text-gray-500 text-sm">Previous</p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* ✅ Current = Green Area */}
          {/* ✅ Current = Green Area */}
          {/* ✅ Current = Green Area */}
          <Area
  type="monotone"
  dataKey="current"
  fill="#00a63e"
  stroke="none"   // just the fill, no line
  opacity={0.3}
/>

<Line
  type="monotone"
  dataKey="current"
  stroke="#00a63e" // solid green line
  strokeWidth={2}
/>

{/* Previous = Blue Line */}
<Line
  type="monotone"
  dataKey="previous"
  stroke="#3B82F6"
  strokeWidth={2}
/>

{/* Target = Teal Dashed Line */}
<Line
  type="monotone"
  dataKey="target"
  stroke="#14B8A6"
  strokeDasharray="5 5"
  strokeWidth={2}
/>

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
