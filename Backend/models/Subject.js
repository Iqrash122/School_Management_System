import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        type: { type: String, enum: ["Core", "Optional"], required: true },

        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true,
        },

        section: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
        },


        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
            required: true,
        },

        description: String,
    },
    { timestamps: true }
);

export default mongoose.model("Subject", subjectSchema);
