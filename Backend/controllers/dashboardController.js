import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import Class from "../models/Class.js";
import Subject from "../models/Subject.js";

export const getDashboardCounts = async (req, res) => {
    try {
        const students = await Student.countDocuments();
        const teachers = await Teacher.countDocuments();
        const classes = await Class.countDocuments();
        const subjects = await Subject.countDocuments();

        res.json({
            students,
            teachers,
            classes,
            subjects,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
