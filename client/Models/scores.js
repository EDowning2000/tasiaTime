import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required"],
    trim: true,
    maxLength: 25,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxLength: 25,
  },
});

export default mongoose.models.Score || mongoose.model("Score", ScoreSchema);
