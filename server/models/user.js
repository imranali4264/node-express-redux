import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    username: String,
    image: String,
  },
  { timeStamp: true }
);

const userModel = mongoose.model("userModel", userSchema);

export default userModel;
