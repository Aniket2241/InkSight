const express = require("express");
const Post = require("../Models/Post");
const router = express.Router();


router.post("/add", async (req, res) => {
  try {
    const { userId, title, content, category, metaTitle, metaDescription, tags } = req.body;

    if (!userId || !title || !content || !metaTitle || !metaDescription) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    const newPost = new Post({
      userId,
      title,
      content,
      category,
      metaTitle,
      metaDescription,
      tags,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "username");
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get posts by user
router.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
