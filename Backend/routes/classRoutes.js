import express from "express";
import {
    getClasses,
    createClass,
    getSingleClass,
    updateClass,
    deleteClass
} from "../controllers/classController.js";


const router = express.Router();

router.post("/create", createClass);
router.get("/show", getClasses);
router.get("/single/:id", getSingleClass);
router.put("/update/:id", updateClass);
router.delete("/delete/:id", deleteClass);


export default router;
