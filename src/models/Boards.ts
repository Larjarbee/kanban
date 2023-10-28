import mongoose from 'mongoose';

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    name: { type: String, required: true },
    columns: [
      {
        name: String,
        color: String,
        tasks: [
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
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.boards || mongoose.model('boards', boardSchema);
