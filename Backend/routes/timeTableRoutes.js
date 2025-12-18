import express from "express";
import {
    createTimeTable,
    getTimeTable,
    updateTimeTable,
} from "../controllers/timeTableController.js";

const router = express.Router();

router.post("/create", createTimeTable);
router.get("/get/:classId/:sectionId", getTimeTable);
router.put("/update/:id", updateTimeTable);

export default router;
