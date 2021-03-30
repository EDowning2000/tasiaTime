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
  holeOne: {},
  holeTwo: {},
  holeThree: {},
  holeFour: {},
  holeFive: {},
  holeSix: {},
  holeSeven: {},
  holeEight: {},
  holeNine: {},
  holeTen: {},
  holeEleven: {},
  holeTwelve: {},
  holeThirteen: {},
  holeFourteen: {},
  holeFifteen: {},
  holeSixteen: {},
  holeSeventeen: {},
  holeEighteen: {},
  relativeToPar: {
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  },
  finalScore: {
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  },
  frontNine: {
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  },
  backNine: {
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  },
});

export default mongoose.models.Score || mongoose.model("Score", ScoreSchema);
