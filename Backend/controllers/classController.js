import Class from "../models/Class.js";

export const createClass = async (req, res) => {
    const cls = await Class.create(req.body);
    res.status(201).json(cls);
};

export const getClasses = async (req, res) => {
    const classes = await Class.find().sort({ createdAt: -1 });
    res.json(classes);
};

export const getSingleClass = async (req, res) => {
    const cls = await Class.findById(req.params.id);
    res.json(cls);
};

export const updateClass = async (req, res) => {
    const cls = await Class.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(cls);
};

export const deleteClass = async (req, res) => {
    await Class.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};
