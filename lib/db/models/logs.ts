import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  module: {
    type: String,
    enum: ["events", "members", "lore", "talks", "achievements"],
    required: true,
  },
  email: { type: String, required: true },
  action: { type: String, required: true },
  title: { type: String, default: "" },
});

// TTL index: 60 days
LogSchema.index({ timestamp: 1 }, { expireAfterSeconds: 60 * 24 * 60 * 60 });

const Log = mongoose.models.Log || mongoose.model("Log", LogSchema);

export default Log;
