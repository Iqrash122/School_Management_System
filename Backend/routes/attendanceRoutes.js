import express from "express";
import {
    markAttendance,
    getAttendance,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/mark", markAttendance);
router.get("/view", getAttendance);

export default router;
