import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Navbar from './Navbar';

let myData= {

  "username" : "Aniket",
  "photo" : "https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg",
  "time" : '2025-11-05',
  "text" : "Hey! I am here in my place"
};


const Post = () => {

  const[likesCount,setCount] = useState(0);

  function increase(){
    setCount(likesCount+1);
   
  }

  return (
    <>
    <Navbar/>
    <div className="bg-gray-900 text-white rounded-lg p-5 w-[800px] mx-auto my-5 shadow-lg">
      <div className="flex justify-between mb-3">
        <span className="font-bold text-2xl flex items-center gap-2">
          <CiUser className="text-3xl" /> {myData.username}
        </span>
        <span className="text-sm text-gray-400">{myData.time}</span>
      </div>
      <img 
        src={myData.photo} 
        alt="Post content" 
        className=" rounded-lg w-[100%]" 
      />    
      <div className="mt-3 mb-3">{myData.text}</div>
      <div className="flex justify-between text-gray-400 text-sm">
        <span className="flex items-center gap-2" onClick={increase}>
          <AiOutlineLike className="text-xl" /> {likesCount} Likes
        </span>
        <span className="flex items-center gap-2">
          <FaRegComment className="text-xl" /> 0 Comments
        </span>
      </div>
    </div>
    </>
  );
};

export default Post;
