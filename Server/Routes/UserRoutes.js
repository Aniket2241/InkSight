const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const SECRET_KEY=process.env.SECRET_KEY;
require("dotenv").config();

router.post("/register", async (req, res) => {
    const { username, password, role } = req.body;

    const validRoles = ["Visitor", "Author"];
    if (!validRoles.includes(role)) {
        return res.status(400).json({ error: "Invalid role. Choose 'Visitor' or 'Author'." });
    }

    try {
        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already taken!" });
        }

        const newUser = new User({ username, password, role });
        await newUser.save();

        const userWithoutPassword = newUser.toObject();
        delete userWithoutPassword.password;

        res.status(201).json({ message: "User registered successfully!", user: userWithoutPassword });
    } catch (error) {
        res.status(500).json({ error: "Server not responding ..Please try again later" });
    }});
    
    router.post("/login", async (req, res) => {
        const { username, password } = req.body;
    
        try {
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({ error: "Invalid username or password!" });
            }
    
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid username or password!" });
            }
    
           
            const token = jwt.sign(
                { id: user._id, role: user.role }, 
                SECRET_KEY, 
                { expiresIn: "1h" }
            );
    
            res.status(200).json({ message: "Login successful!", token, role: user.role });
    
        } catch (error) {
            res.status(500).json({ error: "Server error! Please try again later." });
        }
    });

module.exports = router;