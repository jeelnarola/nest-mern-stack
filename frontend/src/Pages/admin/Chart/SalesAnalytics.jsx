// src/components/SalesAnalytics.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from "recharts";

const data = [
  { day: "Mon", current: 9000, previous: 0, target: 0 },
  { day: "Tue", current: 18000, previous: 12000, target: 15000 },
  { day: "Wed", current: 20000, previous: 9000, target: 21000 },
  { day: "Thu", current: 25000, previous: 27000, target: 28000 },
  { day: "Fri", current: 22000, previous: 15000, target: 23000 },
  { day: "Sat", current: 30000, previous: 35000, target: 36000 },
  { day: "Sun", current: 19000, previous: 25000, target: 30000 },
];

export default function SalesAnalytics() {
  return (
    <div className="bg-white shadow rounded-2xl p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Analytics</h2>
        <div className="flex space-x-2 text-sm">
          <button className="px-3 py-1 rounded-lg bg-gray-100">Today</button>
          <button className="px-3 py-1 rounded-lg bg-gray-100">Weekly</button>
          <button className="px-3 py-1 rounded-lg bg-black text-white">Monthly</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div>
          <p className="text-purple-600 font-bold text-xl">$58,254</p>
          <p className="text-gray-500 text-sm">Current Week</p>
        </div>
        <div>
          <p className="text-green-600 font-bold text-xl">$69,524</p>
          <p className="text-gray-500 text-sm">Previous Week</p>
        </div>
        <div>
          <p className="text-teal-600 font-bold text-xl">$95,025</p>
          <p className="text-gray-500 text-sm">Targets</p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="current" fill="#8884d8" stroke="#8884d8" opacity={0.3} />
          <Line type="monotone" dataKey="previous" stroke="#00C49F" strokeWidth={2} />
          <Line type="monotone" dataKey="target" stroke="#82ca9d" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
