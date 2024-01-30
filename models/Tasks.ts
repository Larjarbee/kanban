import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    boardId: String,
    columnId: String,
    status: String,
    title: String,
    description: String,
    subtasks: [
      {
        title: String,
        isCompleted: Boolean,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.tasks || mongoose.model('tasks', taskSchema);
