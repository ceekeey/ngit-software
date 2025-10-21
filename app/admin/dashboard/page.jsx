"use client";
import { BookOpen, Award, Activity, GraduationCap, PersonStanding, DollarSign, Users, Calendar } from "lucide-react";

// 1. Import Recharts components
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

// --- CHART DATA ---
// Data 1: Total Student Base by Gender
const genderData = [
  { name: 'Male', students: 650, fill: '#0052CC' },
  { name: 'Female', students: 500, fill: '#FF8042' },
  { name: 'Other', students: 50, fill: '#00C49F' },
];
const GENDER_COLORS = ['#0052CC', '#FF8042', '#00C49F'];

// Data 2: Payment Status
const paymentData = [
  { name: 'Paid in Full', value: 450 },
  { name: 'Payment Plan', value: 300 },
  { name: 'Unpaid/Due', value: 450 },
];
const PAYMENT_COLORS = ['#00C49F', '#FFBB28', '#FF4444'];

// Data 3: Enrollment Trend Over Time
const trendData = [
  { name: 'Jan', enrollments: 120, revenue: 12000 },
  { name: 'Feb', enrollments: 150, revenue: 15500 },
  { name: 'Mar', enrollments: 200, revenue: 21000 },
  { name: 'Apr', enrollments: 180, revenue: 18000 },
  { name: 'May', enrollments: 250, revenue: 26000 },
];


export default function TrainingCompanyDashboard() {
  const stats = [
    {
      name: "Total Student Base", // Changed from "Student" for clarity
      value: "1,200",
      icon: <Users className="text-[#0052CC]" size={28} />,
    },
    {
      name: "Total Revenue (MoM)", // New metric for a company dashboard
      value: "$120k",
      icon: <DollarSign className="text-green-600" size={28} />,
    },
    {
      name: "Programs Offer",
      value: "48",
      icon: <BookOpen className="text-[#0052CC]" size={28} />,
    },
    {
      name: "Active Courses", // Changed from "Overall Progress"
      value: "95%",
      icon: <Activity className="text-[#2E8BFD]" size={28} />,
    },
  ];


  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1C1C1E]">Admin Dashboard 📊</h1>
        <p className="text-sm text-gray-500">Key performance indicators and student demographics.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-2xl bg-white shadow-md p-5 hover:shadow-lg transition"
          >
            <div>
              <p className="text-gray-500 text-sm">{stat.name}</p>
              <h3 className="text-2xl font-semibold text-[#1C1C1E]">
                {stat.value}
              </h3>
            </div>
            <div className="bg-[#F5F7FA] p-3 rounded-full">{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* --- Charts Section --- */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Chart 1: Student Base by Gender (Bar Chart) */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold text-[#1C1C1E] mb-4 flex items-center"><Users size={20} className="mr-2 text-gray-400" /> Student Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={genderData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" stroke="#52525B" />
              <YAxis allowDecimals={false} stroke="#52525B" />
              <Tooltip cursor={{ fill: '#f5f5f5' }} />
              <Bar dataKey="students" fill="#0052CC" radius={[4, 4, 0, 0]}>
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2: Payment Status (Pie Chart) */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold text-[#1C1C1E] mb-4 flex items-center"><DollarSign size={20} className="mr-2 text-gray-400" /> Payment Status</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={paymentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {paymentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PAYMENT_COLORS[index % PAYMENT_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 3: Enrollment and Revenue Trend (Line Chart) */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold text-[#1C1C1E] mb-4 flex items-center"><Calendar size={20} className="mr-2 text-gray-400" /> Monthly Trend</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" stroke="#52525B" />
              <YAxis yAxisId="left" stroke="#0052CC" orientation="left" label={{ value: 'Enrollments', angle: -90, position: 'insideLeft', fill: '#0052CC' }} />
              <YAxis yAxisId="right" stroke="#00C49F" orientation="right" label={{ value: 'Revenue ($)', angle: 90, position: 'insideRight', fill: '#00C49F' }} />
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Line yAxisId="left" type="monotone" dataKey="enrollments" stroke="#0052CC" activeDot={{ r: 8 }} name="Enrollments" />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#00C49F" name="Revenue ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}