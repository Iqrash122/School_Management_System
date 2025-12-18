import mongoose from "mongoose";
import TimeTable from "../models/TimeTable.js";

/* ================= CREATE ================= */
export const createTimeTable = async (req, res) => {
    try {
        const { class: cls, section } = req.body;

        if (
            !mongoose.Types.ObjectId.isValid(cls) ||
            !mongoose.Types.ObjectId.isValid(section)
        ) {
            return res.status(400).json({
                message: "Invalid class or section id",
            });
        }

        // ❌ prevent duplicate timetable
        const already = await TimeTable.findOne({
            class: cls,
            section,
        });

        if (already) {
            return res.status(400).json({
                message: "Time table already exists for this class & section",
            });
        }

        const timetable = await TimeTable.create(req.body);
        res.status(201).json(timetable);
    } catch (err) {
        console.error("TIMETABLE CREATE ERROR:", err);
        res.status(500).json({ message: err.message });
    }
};

/* ================= GET ================= */
export const getTimeTable = async (req, res) => {
    const { classId, sectionId } = req.params;

    // 🛑 STOP INVALID IDS
    if (
        !mongoose.Types.ObjectId.isValid(classId) ||
        !mongoose.Types.ObjectId.isValid(sectionId)
    ) {
        return res.status(400).json({
            message: "Invalid class or section id",
        });
    }

    try {
        const table = await TimeTable.findOne({
            class: classId,
            section: sectionId,
        })
            .populate("class", "name")
            .populate("section", "name")
            .populate("days.lectures.subject", "name")
            .populate("days.lectures.teacher", "firstName lastName");

        if (!table) {
            return res.status(404).json({
                message: "Time table not found",
            });
        }

        res.json(table);
    } catch (err) {
        console.error("TIMETABLE FETCH ERROR:", err);
        res.status(500).json({ message: err.message });
    }
};

/* ================= UPDATE ================= */
export const updateTimeTable = async (req, res) => {
    try {
        const table = await TimeTable.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(table);
    } catch (err) {
        console.error("TIMETABLE UPDATE ERROR:", err);
        res.status(500).json({ message: err.message });
    }
};
