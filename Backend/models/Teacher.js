import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        idNumber: { type: String, unique: true },

        firstName: String,
        lastName: String,
        specialization: String,
        gender: String,
        religion: String,
        dob: String,
        class: String,
        section: String,
        bio: String,
        photo: String,
    },
    { timestamps: true }
);

export default mongoose.model("Teacher", teacherSchema);
