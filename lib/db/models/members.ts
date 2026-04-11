import mongoose, { Document } from "mongoose";

export interface Members extends Document {
  name: string;
  linkedInUrl: string;
  role: string;
  imageUrl: string;
  year: "first" | "second" | "third" | "fourth" | "alumni";
  company?: string;
  tags?: "lead" | "alumni-lead";
}

const MembersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  linkedInUrl: { type: String, required: true },
  role: { type: String, required: true },
  imageUrl: { type: String, required: true },
  company: { type: String, required: false },
  year: {
    type: String,
    enum: ["first", "second", "third", "fourth", "alumni"],
    required: true,
  },
  tags: { type: String, enum: ["lead", "alumni-lead"], required: false },
});

const MembersModel =
  mongoose.models.Members || mongoose.model("Members", MembersSchema);

export default MembersModel;
