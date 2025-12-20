import express from "express";
import {
    markAttendance,
    getAttendance,getAttendanceForMonth
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/mark", markAttendance);
router.get("/view", getAttendance);
router.get("/month", getAttendanceForMonth);
export default router;
