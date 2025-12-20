import Attendance from "../models/Attendance.js";

/* ================= MARK / UPDATE ================= */
export const markAttendance = async (req, res) => {
    try {
        const { class: classId, section, date } = req.body;

        // agar same date ka record already hai → update
        const existing = await Attendance.findOne({
            class: classId,
            section,
            date,
        });

        if (existing) {
            existing.records = req.body.records;
            await existing.save();
            return res.json({ message: "Attendance updated" });
        }

        // warna new record
        const attendance = new Attendance(req.body);
        await attendance.save();

        res.json({ message: "Attendance saved" });
    } catch (err) {
        res.status(500).json({ message: "Attendance save failed" });
    }
};

/* ================= VIEW ================= */
export const getAttendance = async (req, res) => {
    try {
        const { classId, sectionId, date } = req.query;

        const attendance = await Attendance.findOne({
            class: classId,
            section: sectionId,
            date,
        }).populate("records.student");

        res.json(attendance);
    } catch (err) {
        res.status(500).json({ message: "Attendance fetch failed" });
    }
};
