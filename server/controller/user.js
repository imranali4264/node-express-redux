import userModel from "../models/user.js";
import express from "express";

const router = express.Router();

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new userModel(user);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export default router;
