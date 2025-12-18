import express from "express";
import {
    createSection,
    getSection,
    delSection,
    update,
    getSingleSection
} from "../controllers/sectionController.js";


const router = express.Router();

router.post("/create", createSection);
router.get("/show", getSection);
router.delete("/delete/:id", delSection);
router.put("/update/:id", update);
router.get("/single/:id", getSingleSection);

export default router;
