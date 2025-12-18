import Subject from "../models/Subject.js";

/* CREATE */
export const createSubject = async (req, res) => {
    try {
        const body = { ...req.body };

        // ✅ remove empty ObjectIds
        if (!body.section) delete body.section;

        const subject = await Subject.create(body);
        res.status(201).json(subject);
    } catch (err) {
        console.error("SUBJECT ERROR:", err);
        res.status(400).json({ message: err.message });
    }
};



/* GET ALL */
export const getSubjects = async (req, res) => {
    const subjects = await Subject.find()
        .populate("class", "name")
        .populate("section", "name")
        .populate("teacher", "firstName lastName");

    res.json(subjects);
};

/* GET BY ID */
export const getSubjectById = async (req, res) => {
    const subject = await Subject.findById(req.params.id)
        .populate("class", "name")
        .populate("section", "name")
        .populate("teacher", "firstName lastName");

    if (!subject) {
        return res.status(404).json({ message: "Subject not found" });
    }

    res.json(subject);
};

/* UPDATE */
export const updateSubject = async (req, res) => {
    const subject = await Subject.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(subject);
};

/* DELETE */
export const deleteSubject = async (req, res) => {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ success: true });
};
