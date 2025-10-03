// src/components/AdminSidebar.jsx
import { FaUserTie, FaUsers, FaBriefcase, FaChartBar, FaCog } from "react-icons/fa";

export default function AdminSidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { key: "candidates", label: "Candidates", icon: <FaUsers /> },
    { key: "employers", label: "Employers", icon: <FaUserTie /> },
    { key: "jobs", label: "Jobs", icon: <FaBriefcase /> },
    { key: "reports", label: "Reports", icon: <FaChartBar /> },
    { key: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`flex items-center gap-2 p-2 mb-2 rounded cursor-pointer transition ${
              activeTab === item.key ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
