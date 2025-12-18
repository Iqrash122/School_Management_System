import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        section_id: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
        section_name: String,
        description: String,
    },
    { timestamps: true }
);

export default mongoose.model("Class", classSchema);
