"use client";
import { BookOpen, Award, Clock, Activity, CheckCircle, GraduationCap, PersonStanding } from "lucide-react";

export default function StudentDashboard() {
  const stats = [
    {
      name: "Student",
      value: "1000",
      icon: <PersonStanding className="text-[#0052CC]" size={28} />,
    },
    {
      name: "Graduates students",
      value: "150",
      icon: <GraduationCap className="text-[#2E8BFD]" size={28} />,
    },
    {
      name: "Programs Offer",
      value: "48",
      icon: <BookOpen className="text-[#0052CC]" size={28} />,
    },
    {
      name: "Overall Progress",
      value: "76%",
      icon: <Activity className="text-[#2E8BFD]" size={28} />,
    },
  ];

  const activities = [
    {
      icon: <BookOpen className="text-[#0052CC]" size={22} />,
      title: "Enrolled in “Web Development Basics”",
      time: "2 hours ago",
    },
    {
      icon: <CheckCircle className="text-green-500" size={22} />,
      title: "Completed “Intro to Python”",
      time: "1 day ago",
    },
    {
      icon: <Award className="text-[#2E8BFD]" size={22} />,
      title: "Earned a Certificate of Completion",
      time: "2 days ago",
    },
    {
      icon: <BookOpen className="text-[#0052CC]" size={22} />,
      title: "Started “Advanced React”",
      time: "3 days ago",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1C1C1E]">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, student 👋</p>
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

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-[#1C1C1E] mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-4">
          {activities.map((act, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <div className="bg-[#F5F7FA] p-2 rounded-full">{act.icon}</div>
              <div>
                <p className="text-sm font-medium text-[#1C1C1E]">
                  {act.title}
                </p>
                <p className="text-xs text-gray-500">{act.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}