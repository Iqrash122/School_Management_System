import Section from "../models/Section.js";

export const createSection = async (req, res) => {
    try {
        console.log("BODY RECEIVED:", req.body);

        const section = await Section.create({
            section_name: req.body.section_name,
        });
        res.status(201).json(section);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getSection = async (req, res) => {
    try {
        const sections = await Section.find().sort({ createdAt: -1 });
        res.json(sections);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


export const delSection = async (req, res) => {
    try {
        const { id } = req.params;
        const section = await Section.findByIdAndDelete(id);
        if (!section) {
            return res.status(404).json({ message: "Section Not Found" });
        }
        res.json({
            message: "Section deleted Successfully!",
            Section
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { section_name } = req.body;
        const section = await Section.findByIdAndUpdate(id, {
            section_name
        },
            {
                new: true
            });

        if (!section) {
            return res.status(404).json({ message: "Section Not Found" });

        }
        res.json({
            message: "Section update successfully",
            Section,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getSingleSection = async (req, res) => {
    try {
        const section = await Section.findById(req.params.id);
        if (!section) {
            return res.status(404).json({ message: "Section not found" });
        }
        res.json(section);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

