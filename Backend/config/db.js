import mongoose from "mongoose";

export const conectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Data base connected");
    }
    catch (e) {
        console.log("Error connecting to the database", e);
    }
}