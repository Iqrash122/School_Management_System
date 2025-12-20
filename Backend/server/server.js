import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import sectionRoutes from '../routes/sectionRoutes.js'
import classRoutes from "../routes/classRoutes.js";
import studentsRoutes from "../routes/studentRoutes.js";
import teacherRoutes from '../routes/teacherRoutes.js'
import subjectRoutes from "../routes/subjectRoutes.js";
import timeTableRoutes from '../routes/timeTableRoutes.js';
import dashboardRoutes from '../routes/dashboardRoutes.js';
import examRoutes from "../routes/examRoutes.js";
import attendanceRoutes from "../routes/attendanceRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/sections", sectionRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/timetable", timeTableRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/uploads", express.static('uploads'));

app.get("/", (req, res) => {
    res.send("API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
