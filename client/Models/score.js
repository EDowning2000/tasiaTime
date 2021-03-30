import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  date: {
    type: Timestamp,
    required: true,
    trim: true,
  },
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
  holeOne: { type: String, required: false, trim: true, maxLength: 10 },
  holeTwo: { type: String, required: false, trim: true, maxLength: 10 },
  holeThree: { type: String, required: false, trim: true, maxLength: 10 },
  holeFour: { type: String, required: false, trim: true, maxLength: 10 },
  holeFive: { type: String, required: false, trim: true, maxLength: 10 },
  holeSix: { type: String, required: false, trim: true, maxLength: 10 },
  holeSeven: { type: String, required: false, trim: true, maxLength: 10 },
  holeEight: { type: String, required: false, trim: true, maxLength: 10 },
  holeNine: { type: String, required: false, trim: true, maxLength: 10 },
  holeTen: { type: String, required: false, trim: true, maxLength: 10 },
  holeEleven: { type: String, required: false, trim: true, maxLength: 10 },
  holeTwelve: { type: String, required: false, trim: true, maxLength: 10 },
  holeThirteen: { type: String, required: false, trim: true, maxLength: 10 },
  holeFourteen: { type: String, required: false, trim: true, maxLength: 10 },
  holeFifteen: { type: String, required: false, trim: true, maxLength: 10 },
  holeSixteen: { type: String, required: false, trim: true, maxLength: 10 },
  holeSeventeen: { type: String, required: false, trim: true, maxLength: 10 },
  holeEighteen: { type: String, required: false, trim: true, maxLength: 10 },
  relativeToPar: {
    type: String,
    required: false,
    trim: true,
    maxLength: 10,
  },
  finalScore: {
    type: String,
    required: false,
    trim: true,
    maxLength: 10,
  },
  frontNine: {
    type: String,
    required: false,
    trim: true,
    maxLength: 10,
  },
  backNine: {
    type: String,
    required: false,
    trim: true,
    maxLength: 10,
  },
});

export default mongoose.models.Score || mongoose.model("Score", ScoreSchema);
