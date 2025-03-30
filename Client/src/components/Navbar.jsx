import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="w-full  bg-gray-800 text-white p-4 shadow-lg flex justify-between items-center px-8  border-b-2">
            <motion.div 
                className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('/')}
            >
                InkSight ✍️
            </motion.div>

         
            <div className="flex gap-4">
                <motion.button 
                    onClick={() => navigate('/dashboard')}
                    className="bg-green-500  hover:bg-green-600 cursor-pointer text-white flex items-center gap-2 px-5 py-2 rounded-lg shadow-lg transition-all transform hover:scale-105"
                    whileHover={{ y: -3 }}
                >
                    📊 Dashboard
                </motion.button>

                <motion.button 
                    onClick={() => navigate('/addpost')} 
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white flex items-center gap-2 px-5 py-2 rounded-lg shadow-lg transition-all transform hover:scale-105"
                    whileHover={{ y: -3 }}
                >
                    ➕ Create
                </motion.button>

                <motion.button 
                    onClick={() => navigate('/')} 
                    className="bg-red-500 hover:bg-red-600 cursor-pointer text-white flex items-center gap-2 px-5 py-2 rounded-lg shadow-lg transition-all transform hover:scale-105"
                    whileHover={{ y: -3 }}
                >
                    🚪 Logout
                </motion.button>
                <motion.button 
                    onClick={() => navigate('/feedback')} 
                    className="bg-green-400 hover:bg-blue-600 cursor-pointer text-white flex items-center gap-2 px-5 py-2 rounded-lg shadow-lg transition-all transform hover:scale-105"
                    whileHover={{ y: -3 }}
                >
                    ➕ Feedback
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
