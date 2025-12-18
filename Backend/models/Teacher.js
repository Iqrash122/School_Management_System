import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        idNumber: { type: String, required: true, unique: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        gender: { type: String, required: true },
        dob: { type: Date, required: true },
        bloodGroup: { type: String, required: true },
        religion: { type: String, required: true },
        class: { type: String, required: true },
        section: { type: String, required: true },
        bio: String,
        photo: String,
    },
    { timestamps: true }
);

export default mongoose.model("Teacher", teacherSchema);
