import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reaquired: true,
    },
    email: {
      type: String,
      reaquired: true,
      unique: true,
    },
    password: {
      type: String,
      reaquired: true,
    },
    role: {
      type: String,
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
