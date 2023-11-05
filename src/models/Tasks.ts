import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    status: String,
    subtasks: [
      {
        title: String,
        isCompleted: Boolean,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Tasks || mongoose.model('Tasks', taskSchema);
