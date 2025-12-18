import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema(
    {
        section_name: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Section", SectionSchema);
