const express = require('express')
const app = express();
const postRoutes = require("./Routes/PostRoutes");
const connectDB = require("./database");
const route=require('./Routes/UserRoutes');
const cors=require('cors')
const blogs = [
    { 
        id: 1, 
        title: "AI in Healthcare", 
        imageUrl: "https://www.datasciencecentral.com/wp-content/uploads/2024/10/Artificial-Intelligence-in-Healthcare-industry-1024x683.jpg", 
        description: "Exploring how AI is revolutionizing healthcare. AI-powered diagnostics, robotic surgeries, and personalized treatments are transforming the industry. From early disease detection to virtual health assistants, AI is making healthcare more efficient and accessible." 
    },
    { 
        id: 2, 
        title: "Web3 and Decentralization", 
        imageUrl: "https://publichealthnotes.com/wp-content/uploads/2022/04/istockphoto-1294971842-612x612-1.jpg", 
        description: "An introduction to Web3 and its impact. Web3 represents a decentralized internet, where blockchain technology empowers users with true ownership of their data. The shift from centralized platforms to decentralized applications (DApps) is changing digital interactions." 
    },
    { 
        id: 3, 
        title: "Cybersecurity in 2025", 
        imageUrl: "https://go.tiffin.edu/wp-content/uploads/bs-cybersecurity-1536x922.jpeg", 
        description: "Upcoming trends in cybersecurity. With the rise of AI-driven cyber threats, organizations must adopt advanced security protocols. Zero-trust architecture, biometric authentication, and quantum-safe encryption will play crucial roles in protecting data." 
    },
    { 
        id: 4, 
        title: "Quantum Computing 101", 
        imageUrl: "https://g.foolcdn.com/image/?url=https://g.foolcdn.com/editorial/images/805209/gettyimages-2156615862-1.jpg&w=700", 
        description: "Understanding the basics of quantum computing. Unlike classical computers, quantum computers leverage qubits to perform complex calculations at unprecedented speeds. This technology has the potential to revolutionize cryptography, material science, and artificial intelligence." 
    },
    { 
        id: 5, 
        title: "The Rise of Remote Work", 
        imageUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1ofEK-sDLAvEkZW2gX5-Yg.jpeg", 
        description: "How remote work is shaping the future of jobs. The shift to hybrid and fully remote work models has led to greater work-life balance, increased productivity, and wider access to global talent. However, it also presents challenges in team collaboration and cybersecurity." 
    },
    { 
        id: 6, 
        title: "Blockchain Beyond Crypto", 
        imageUrl: "https://cioviews.com/wp-content/uploads/2024/09/Blockchain-Beyond-Cryptocurrency.jpg", 
        description: "Exploring blockchain use cases outside cryptocurrency. From supply chain transparency to digital identity verification, blockchain technology is being used across industries. Smart contracts are revolutionizing agreements by automating processes without intermediaries." 
    },
    { 
        id: 7, 
        title: "The Future of AI Ethics", 
        imageUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20240318112121/What-are-AI-ethics.webp", 
        description: "Discussing the ethical implications of AI. As AI systems become more autonomous, questions of bias, privacy, and accountability arise. Ensuring fairness in AI decision-making and preventing misuse of AI technologies is essential for a responsible future." 
    },
    { 
        id: 8, 
        title: "5G and Smart Cities", 
        imageUrl: "https://www.sageautomation.com/hs-fs/hubfs/blog_images/5G%20Networks/SmartCity-%20Blog%202.png?width=900&name=SmartCity-%20Blog%202.png", 
        description: "How 5G is enabling smart city innovations. Ultra-fast connectivity is driving advancements in autonomous vehicles, IoT devices, and real-time monitoring systems. 5G-powered cities will have improved traffic management, public safety, and efficient resource allocation." 
    },
    { 
        id: 9, 
        title: "Cloud Computing Trends", 
        imageUrl: "https://networksunlimited.com/wp-content/uploads/2019/02/cloud-computing.png", 
        description: "Latest trends in cloud computing. Hybrid and multi-cloud environments are gaining traction as businesses seek scalable and secure solutions. AI-driven cloud management is optimizing resource allocation and enhancing data security across industries." 
    },
    { 
        id: 10, 
        title: "The Evolution of Social Media", 
        imageUrl: "https://wsacommunications.co.uk/wp-content/uploads/2022/06/MicrosoftTeams-image-57-1-700x525.jpg", 
        description: "How social media has evolved over the years. From early networking sites to AI-driven content recommendations, social media continues to shape how we communicate. Privacy concerns, misinformation, and platform regulation remain key challenges." 
    }
];

  
require("dotenv").config();
app.use(cors());
app.use(express.json());
connectDB(); 
app.use("/users",route)
app.use("/post",postRoutes);
app.get("/blogs", (req, res) => {
    res.status(200).json(blogs);
  });
  
app.get("/",(req,res)=>{
    console.log('The api call was recieved successfully');
    res.send("hi how are you");
})
app.listen(5000,()=>{
    console.log("Server started at port 5000");
})
