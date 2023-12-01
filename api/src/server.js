import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = 6000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => app.listen(port, () => console.log("server is up")))
  .catch(() => {
    console.log("server is down"), process.exit(1);
  });
