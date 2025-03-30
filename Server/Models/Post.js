const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  username: { type: String, required: true, ref: "User" }, // Store username
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
 
});

module.exports = mongoose.model("Post", PostSchema);
