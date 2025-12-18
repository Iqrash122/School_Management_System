import express from "express";
import {
    createSection,
    getSection,
    delSection
} from "../controllers/sectionController.js";


const router = express.Router();

router.post("/create", createSection);
router.get("/show", getSection);
router.delete("/delete/:id", delSection);

export default router;
