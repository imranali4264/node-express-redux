import express from "express";
import createUser from "./routes/user.js";

const app = express();

export const createAccount = () => {
  app.use("/create-account", createUser);
};
