const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Enable CORS to allow frontend requests
app.use(cors());

// Default route
app.get("/", (req, res) => {
    res.send("Backend API Running 🚀");
});

// API route for frontend
app.get("/api/msg", (req, res) => {
    res.json({ msg: "Hello from dididishhhhhhh 👋" });
});

app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
);
