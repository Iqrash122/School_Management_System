import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        // IDs
        registrationNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        rollNumber: {
            type: String,
            trim: true,
        },

        // Basic Info
        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
        },

        gender: {
            type: String,
            enum: ["Male", "Female"],
            required: true,
        },

        dateOfBirth: {
            type: Date,
            required: true,
        },

        // Academic Info
        class: {
            type: String,
            required: true,
        },

        section: {
            type: String,
            required: true,
        },

        // Personal Info
        bloodGroup: {
            type: String,
            required: true,
            enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        },

        religion: {
            type: String,
            required: true,
        },

        bio: {
            type: String,
            maxlength: 500,
        },

        // Contact
        email: {
            type: String,
            lowercase: true,
            trim: true,
        },

        // Photo
        photo: {
            type: String, // image URL / filename
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Student", studentSchema);
