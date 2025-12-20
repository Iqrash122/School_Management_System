import express from "express";
import {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent, getStudentsByClassSection
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent);
router.get("/show", getStudents);
router.get("/single/:id", getSingleStudent);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);
router.get("/by-class-section", getStudentsByClassSection);

export default router;
