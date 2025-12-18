import Teacher from "../models/Teacher.js";
import Counter from "../models/Counter.js";


const generateTeacherId = async () => {
    const counter = await Counter.findOneAndUpdate(
        { key: "teacher" },
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );

    return `TCH-${String(counter.value).padStart(4, "0")}`;
};



// CREATE
export const createTeacher = async (req, res) => {
    try {
        const idNumber = await generateTeacherId();

        const teacher = await Teacher.create({
            ...req.body,
            idNumber,
        });

        res.status(201).json(teacher);
    } catch (error) {
        console.error("CREATE TEACHER ERROR:", error);
        res.status(500).json({ message: error.message });
    }
};


// GET ALL
export const getTeacher = async (req, res) => {
    const teachers = await Teacher.find().sort({
        createdAt: -1,
    });
    res.json(teachers);
};

// GET BY ID
export const getTeacherbyID = async (req, res) => {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
        return res.status(404).json({
            error: "Teacher Not Found",
        });
    }

    res.json(teacher);
};

// UPDATE
export const updateTeacher = async (req, res) => {
    const teacher = await Teacher.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(teacher);
};

// DELETE
export const deleteTeacher = async (req, res) => {
    await Teacher.findByIdAndDelete(req.params.id);

    res.json({
        success: "Deleted Successfully!",
    });
};



