import React from "react";
import { useNavigate } from "react-router-dom";
import AddPost from "./AddPost";

export default function LandingPage() {
  const navigate = useNavigate(); 

  function handleNavigate() {
    navigate("/addpost");
  }

  return (
    <div>
      ji
      <button onClick={handleNavigate} className="text-white-800 bg-blue-400 border-2">
        Add Post
      </button>
    </div>
  );
}
