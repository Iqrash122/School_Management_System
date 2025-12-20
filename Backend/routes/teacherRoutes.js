import express from "express";
import {
    createTeacher,
    getTeacher,
    getTeacherbyID,
    updateTeacher,
    deleteTeacher,
} from "../controllers/teacherController.js";
import { upload } from "../middleware/uploads.js";

const router = express.Router();
router.post("/create", upload.single('photo'), createTeacher);
router.get("/get", getTeacher);
router.get("/edit/:id", getTeacherbyID);
router.put("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);


export default router;
