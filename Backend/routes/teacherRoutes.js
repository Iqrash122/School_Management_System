import express from 'express'

import {
    createTeacher, getTeacher,getTeacherbyID,updateTeacher,deleteTeacher
} from '../controllers/teacherController';

const router = express.Router();
router.post("/", createTeacher);
router.get("/", getTeacher);
router.get("/:id", getTeacherbyID);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);

export default router;