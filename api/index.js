import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import postRouter from "./routes/posts.js";
import authRouter from "./routes/auth.js";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);


mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`Connected to DB and Listening on port ${port}`);
  });
}
)


