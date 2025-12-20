import express from "express";
import {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/studentController.js";
import { upload } from "../middleware/uploads.js";
const router = express.Router();

router.post("/create", upload.single('photo'), createStudent);
router.get("/show", getStudents);
router.get("/single/:id", getSingleStudent);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);


export default router;
