import mongoose from "mongoose";

interface Achievement {
  title: string;
  description: string;
}

export interface Achievements extends mongoose.Document {
  name: string;
  imageUrl: string;

  achivements: {
    GSoC?: Achievement[];
    LFX?: Achievement[];
    SIH?: Achievement[];
    LIFT?: Achievement[];
    Hackathons?: Achievement[];
    CP?: Achievement[];
    ACM?: Achievement[];
  };
}

const AchievementsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  achivements: {
    GSoC: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    LFX: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    SIH: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    LIFT: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    Hackathons: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    CP: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    ACM: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
});

export default mongoose.models.Achievements ||
  mongoose.model<Achievements>("Achievements", AchievementsSchema);
