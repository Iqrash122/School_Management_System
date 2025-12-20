import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
        class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
        section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
        examDate: String,
        timeFrom: String,
        timeTo: String,
        description: String,
    },
    { timestamps: true }
);

export default mongoose.model("Exam", examSchema);
