import mongoose, { Document } from "mongoose";

interface Talk extends mongoose.Document {
  title: string;
  description: string;
  images: string[];
  type: "conference" | "talks" | "other";
  name: string;
  date: Date;
  speakers: string;
}

const TalkModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  type: {
    type: String,
    enum: ["conference", "talks", "other"],
    required: true,
  },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  speakers: { type: String, required: true },
});

const Talk = mongoose.models.Talk || mongoose.model("Talk", TalkModel);

export default Talk;
