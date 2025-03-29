const express = require("express");
const Post = require("../models/Post"); // Your Post model
const User = require("../models/User"); // Import User model

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { username, title, content, category, metaTitle, metaDescription, tags } = req.body;

    // Ensure all required fields are present
    if (!username || !title || !content || !category || !metaTitle || !metaDescription) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the username exists in the User collection
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Create new post with username instead of userId
    const newPost = new Post({
      username,  // Storing username instead of userId
      title,
      content,
      category,
      metaTitle,
      metaDescription,
    
    });

    await newPost.save();
    return res.status(201).json({ message: "Post added successfully!", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
