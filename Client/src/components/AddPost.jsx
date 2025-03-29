import React, { useState } from "react";
import { useNavigate } from "react-router";
const AddPost = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["General", "Technology", "Health", "Finance", "Lifestyle"];
const navigate=useNavigate();
  const handleSubmit = async () => {
    const username = localStorage.getItem("username");
  let category="simple"

    setIsSubmitting(true);

    const postData = {
      username,  // Send username instead of userId
      title: title.trim(),
      content: content.trim(),
      category,
      metaTitle: metaTitle.trim(),
      metaDescription: metaDescription.trim(),
    
    };
    

    try {
      const response = await fetch("http://localhost:5000/post/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Post added successfully!");
        setTitle("");
        setContent("");
        setCategory("General");
        setMetaTitle("");
        setMetaDescription("");
        navigate('/LandingPage');

      } else {
        alert(`Error: ${result.message || "Failed to add post."}`);
  
      }
    } catch (err) {
      console.error("Server error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div className="w-[80%] p-4 rounded-xl bg-gray-900 text-white shadow-lg border border-white">
        <h2 className="text-3xl font-bold text-center mb-6">✍ Create a New Post</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Post Title *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border" placeholder="Enter post title" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Post Content *</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border min-h-[200px]" placeholder="Write your post content here..." />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Meta Title *</label>
            <input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border" placeholder="Enter meta title" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Meta Description *</label>
            <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border min-h-[100px]" placeholder="Enter meta description" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border">
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-gray-900">{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={handleSubmit} disabled={isSubmitting} className={`w-full py-3 px-6 rounded-lg font-bold text-white ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-indigo-700"}`}>
              {isSubmitting ? "Publishing..." : "Publish Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
