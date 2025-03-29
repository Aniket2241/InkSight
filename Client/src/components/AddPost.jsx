import React, { useState } from "react";
import { motion } from "framer-motion";

const AddPost = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["General", "Technology", "Health", "Finance", "Lifestyle"];

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!title || !content || !metaTitle || !metaDescription) {
      alert("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);

    const postData = {
      userId,
      title,
      content,
      category,
      metaTitle,
      metaDescription,
      tags,
    };

    try {
      const response = await fetch("http://localhost:5000/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("Post added successfully!");
        setTitle("");
        setContent("");
        setCategory("General");
        setMetaTitle("");
        setMetaDescription("");
        setTags([]);
      } else {
        alert("Error adding post.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center w-full  px-4 py-8"
    >
      <motion.div
        className=" w-[80%] p-4 rounded-xl bg-gray-900 text-white shadow-lg border border-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">✍ Create a New Post</h2>

        <div className="space-y-6">
          {/* Title Input */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-300 mb-2">Post Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter post title"
            />
          </motion.div>

          {/* Content Textarea */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-300 mb-2">Post Content *</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition min-h-[200px]"
              placeholder="Write your post content here..."
            />
          </motion.div>

          {/* Category Select */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-300 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-gray-900">
                  {cat}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Tags Input */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block text-gray-300 mb-2">Tags</label>
            <div className="bg-gray-900 rounded-lg p-3">
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="ml-2 text-xs text-gray-300 hover:text-red-400"
                    >
                      ×
                    </button>
                  </motion.div>
                ))}
              </div>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Type a tag and press Enter"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
              }`}
            >
              {isSubmitting ? (
                <span className=" items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75 "
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Publishing...
                </span>
              ) : (
                "Publish Post"
              )}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddPost;
