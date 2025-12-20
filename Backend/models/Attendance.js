import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
    {
        teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

        class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
        section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },

        date: String,          // 2025-03-01
        month: Number,         // 1 - 12
        session: String,       // 2024-2025

        records: [
            {
                student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
                status: {
                    type: String,
                    enum: ["present", "absent", "leave"],
                    default: "present",
                },
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
