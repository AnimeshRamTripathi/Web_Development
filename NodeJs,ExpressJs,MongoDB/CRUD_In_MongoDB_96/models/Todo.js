import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Ensures title is always present
    desc: { type: String, required: true },
    isDone: { type: Boolean, default: false }
});

// ✅ Define and export the model
export const Todo = mongoose.model("Todo", TodoSchema);