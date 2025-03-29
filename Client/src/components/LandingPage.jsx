import React, { useState, useEffect } from 'react';
import { CiUser } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Navbar from './Navbar';

const Post = () => {
  const [posts, setPosts] = useState([]); // Store fetched posts
  const [likes, setLikes] = useState({}); // Store likes for each post

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/post/posts");
        const data = await response.json();

        if (response.ok) {
          setPosts(data);
          // Initialize likes state for each post
          const initialLikes = {};
          data.forEach((post) => {
            initialLikes[post._id] = 0; // Default likes count
          });
          setLikes(initialLikes);
        } else {
          console.error("Error fetching posts:", data.message);
        }
      } catch (error) {
        console.error("Server error:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to handle likes
  const increaseLike = (postId) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1
    }));
  };

  return (
    <>
      <Navbar />
      <div className="w-[800px] mx-auto my-5">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="bg-gray-900 text-white rounded-lg p-5 mb-5 shadow-lg">
              
              {/* User Info */}
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-xl flex items-center gap-2">
                  <CiUser className="text-3xl" /> {post.username}
                </span>
                <span className="text-sm text-gray-400">{new Date(post.createdAt).toDateString()}</span>
              </div>

              {/* Placeholder for Image */}
              <div className="w-full h-[200px] bg-gray-700 flex items-center justify-center rounded-lg mb-3">
                <span className="text-gray-400">Image Placeholder</span>
              </div>

              {/* Post Title */}
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

              {/* Post Content */}
              <p className="mb-3 text-gray-300">{post.content}</p>

              {/* Like & Comment Section */}
              <div className="flex justify-between text-gray-400 text-sm">
                <span className="flex items-center gap-2 cursor-pointer" onClick={() => increaseLike(post._id)}>
                  <AiOutlineLike className="text-xl" /> {likes[post._id] || 0} Likes
                </span>
                <span className="flex items-center gap-2">
                  <FaRegComment className="text-xl" /> 0 Comments
                </span>
              </div>

            </div>
          ))
        ) : (
          <p className="text-white text-center">No posts available.</p>
        )}
      </div>
    </>
  );
};

export default Post;
