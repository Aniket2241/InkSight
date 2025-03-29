import React from "react";
import { useNavigate } from "react-router";
const Navbar = () => {
    const navigates=useNavigate();
    function navigate(){
        navigates('/addpost')
    }
  return (
    <nav className="w-full bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">InkSight</div>
      <div className="flex gap-4">
        <button onClick={navigate} className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow cursor-pointer">
          ➕ Create
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow cursor-pointer">
          🚪 Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;