import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
    },
    startTime: String, // "09:00"
    endTime: String,   // "09:45"
});

const daySchema = new mongoose.Schema({
    day: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        required: true,
    },
    lectures: [lectureSchema],
});

const timeTableSchema = new mongoose.Schema(
    {
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true,
        },
        section: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
            required: true,
        },
        days: [daySchema],
    },
    { timestamps: true }
);

export default mongoose.model("TimeTable", timeTableSchema);
