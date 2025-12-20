import mongoose from "mongoose";
import Counter from "./Counter.js";

const studentSchema = new mongoose.Schema(
    {
        registrationNumber: {
            type: String,
            unique: true,
        },

        rollNumber: String,

        firstName: { type: String,  },
        lastName: { type: String,  },

        gender: { type: String, enum: ["Male", "Female"],  },
        dateOfBirth: { type: Date,  },

        StuCnic: Number,
        fName: String,
        fCnic: Number,
        fNumber: Number,

        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
        },

        section: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
        },

        bloodGroup: String,
        religion: String,
        bio: String,
        photo: String,
    },
    { timestamps: true }
);

/* 🔥 AUTO REGISTRATION NUMBER */
studentSchema.pre("save", async function (next) {
    if (this.registrationNumber) return next();

    if (!this.class || !this.section) {
        return next(new Error("Class and Section are required for registration number"));
    }

    // 1️⃣ DATE (YYMMDD)
    const now = new Date();
    const yy = String(now.getFullYear()).slice(2);
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const datePart = `${yy}${mm}${dd}`;

    // 2️⃣ COUNTER (GLOBAL STUDENT)
    const counter = await Counter.findOneAndUpdate(
        { name: "student" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );

    const seqPart = String(counter.seq).padStart(4, "0");

    // 3️⃣ FINAL REGISTRATION NUMBER
    this.registrationNumber = `STU-${this.class}${this.section}-${datePart}-${seqPart}`;

});


export default mongoose.model("Student", studentSchema);
