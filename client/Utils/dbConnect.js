import mongoose from "mongoose";
const connection = {};
require("dotenv").config();

async function dbConnect() {
  if (connection.isconnected) {
    return;
  }
  //console.log(process.env)
  const db = await mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isconnected = db.connections[0].readyState;
  console.log(connection.isconnected);
}

export default dbConnect;
