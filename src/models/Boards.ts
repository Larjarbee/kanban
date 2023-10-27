import mongoose from 'mongoose';

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    name: { type: String, required: true },
    columns: [String],
    tasks: {
      title: String,
      disc: String,
      subtacks: [{ completed: Boolean, task: String }],
      status: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.models.boards || mongoose.model('boards', boardSchema);
