import React, { useState, useEffect } from 'react';
import { CiUser } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Navbar from './Navbar';
import { motion } from "framer-motion";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/post/posts");
        const data = await response.json();

        if (response.ok) {
          setPosts(data);

          const initialLikes = {};
          data.forEach(post => (initialLikes[post._id] = false));
          setLikedPosts(prev => ({ ...prev, ...initialLikes }));
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        const data = await response.json();

        if (response.ok) {
          setBlogs(data);

          const initialLikes = {};
          data.forEach(blog => (initialLikes[blog._id] = false));
          setLikedPosts(prev => ({ ...prev, ...initialLikes }));
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleLike = (postId) => {
    setLikedPosts(prevLikedPosts => ({
      ...prevLikedPosts,
      [postId]: !prevLikedPosts[postId]
    }));
  };

  return (
    <>
      <Navbar />
      <div className="w-full max-w-4xl mx-auto py-6">
        {loading ? (
          <p className="text-white text-center animate-pulse">Loading posts...</p>
        ) : (
          [...posts, ...blogs].map((post, index) => (
            <motion.div 
              key={post._id} 
              className="bg-gray-900 text-white rounded-lg p-6 mb-5 shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg flex items-center gap-2">
                  <CiUser className="text-2xl cursor-pointer" /> {post.username || "Guest Author"}
                </span>
                <span className="text-sm text-gray-400">{new Date().toDateString()}</span>
              </div>

              {post.imageUrl && (
                <div className="w-full h-56 overflow-hidden rounded-lg mb-3">
                  <img src={post.imageUrl} alt={post.title} className="w-full cursor-pointer h-full object-cover" />
                </div>
              )}

              <h2 className="text-xl font-semibold mb-2 hover:text-red-400 cursor-pointer">{post.title}</h2>

              <p className="mb-3 text-gray-300">{post.description || post.content}</p>

              <div className="flex justify-between text-gray-400 text-sm">
                <span 
                  className={`flex items-center gap-2 cursor-pointer transition ${likedPosts[post._id] ? 'text-blue-400' : 'hover:text-blue-300'}`} 
                  onClick={() => handleLike(post._id)}
                >
                  <AiOutlineLike className="text-xl" /> {likedPosts[post._id] ? "Liked" : "Like"}
                </span>
                <span className="flex items-center gap-2">
                  <FaRegComment className="text-xl" /> 0 Comments
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </>
  );
};

export default Post;
