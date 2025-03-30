import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FaUser, FaHeart, FaEye, FaComment, FaTrophy } from "react-icons/fa";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [username, setUsername] = useState("Aniket");
const navigate=useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) {
      setUsername(storedUser.name);
    }
  }, []);

  const userData = {
    username,
    points: 1200,
    views: 5400,
    likes: 850,
    comments: 320,
  };
  function back(){
    navigate('/LandingPage')
  }

  const data = [
    { name: "Views", value: userData.views },
    { name: "Likes", value: userData.likes },
    { name: "Comments", value: userData.comments },
  ];

  const COLORS = ["#4CAF50", "#FF4081", "#FFEB3B"];

  return (
    <>
        <button onClick={back} className="text-white border-2 bg-blue-400 p-2 rounded-lg cursor-pointer">Back</button>

    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        🎯 User Dashboard
      </h2>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: <FaUser className="text-blue-400" />, label: "Username", value: userData.username },
          { icon: <FaTrophy className="text-yellow-400" />, label: "Points", value: userData.points },
          { icon: <FaEye className="text-green-400" />, label: "Total Views", value: userData.views },
          { icon: <FaHeart className="text-red-400" />, label: "Likes", value: userData.likes },
          { icon: <FaComment className="text-purple-400" />, label: "Comments", value: userData.comments },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-xl flex items-center gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <p className="text-gray-400">{stat.label}</p>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex flex-col items-center bg-gray-900 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-white mb-4">📊 User Insights</h3>
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="cursor-pointer transition-all duration-300 hover:scale-110"
              />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "10px" }} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
