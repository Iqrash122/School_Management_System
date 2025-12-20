import Exam from "../models/Exam.js";

/* ================= GET ALL ================= */
export const getExams = async (req, res) => {
    try {
        const exams = await Exam.find()
            .populate("subject")
            .populate("class")
            .populate("section");

        res.json(exams);
    } catch (err) {
        res.status(500).json({ message: "Failed to load exams" });
    }
};

/* ================= GET SINGLE ================= */
export const getExamById = async (req, res) => {
    try {
        const exam = await Exam.findById(req.params.id)
            .populate("subject")
            .populate("class")
            .populate("section");

        if (!exam) {
            return res.status(404).json({ message: "Exam not found" });
        }

        res.json(exam);
    } catch (err) {
        res.status(500).json({ message: "Failed to load exam" });
    }
};

/* ================= CREATE ================= */
export const createExam = async (req, res) => {
    try {
        const exam = new Exam(req.body);
        await exam.save();
        res.json({ message: "✅ Exam Created", exam });
    } catch (err) {
        res.status(500).json({ message: "Failed to create exam" });
    }
};

/* ================= UPDATE ================= */
export const updateExam = async (req, res) => {
    try {
        const exam = await Exam.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!exam) {
            return res.status(404).json({ message: "Exam not found" });
        }

        res.json({ message: "✅ Exam Updated", exam });
    } catch (err) {
        res.status(500).json({ message: "Failed to update exam" });
    }
};

/* ================= DELETE ================= */
export const deleteExam = async (req, res) => {
    try {
        await Exam.findByIdAndDelete(req.params.id);
        res.json({ message: "🗑 Exam Deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete exam" });
    }
};
