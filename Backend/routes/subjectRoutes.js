import express from "express";
import {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject,
} from "../controllers/subjectController.js";

const router = express.Router();

router.post("/create", createSubject);
router.get("/get", getSubjects);
router.get("/edit/:id", getSubjectById);
router.put("/update/:id", updateSubject);
router.delete("/delete/:id", deleteSubject);

export default router;
