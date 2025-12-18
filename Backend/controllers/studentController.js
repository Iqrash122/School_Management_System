import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        console.error("STUDENT CREATE ERROR:", error.message);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const getStudents = async (req, res) => {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
};

export const getSingleStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
};

export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true, // ✅ VERY IMPORTANT
            }
        );

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
};
