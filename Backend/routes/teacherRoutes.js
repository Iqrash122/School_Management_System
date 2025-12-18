import express from "express";

import {
    createTeacher,
    getTeacher,
    getTeacherbyID,
    updateTeacher,
    deleteTeacher
} from "../controllers/teacherController.js";

const router = express.Router();

router.post("/create", createTeacher);
router.get("/teacher", getTeacher);
router.get("/edit/:id", getTeacherbyID);
router.put("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);

export default router;
