import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { Message } from "./models/message.model.js";
dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", async (req, res) => {
  const id = req.query.id;
  console.log(`Received request for ID: ${id}`, typeof id);

  const messages = await Message.find();
  console.log(`Messages found: ${messages.length}`, messages);
  res.json({ messages: messages });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
