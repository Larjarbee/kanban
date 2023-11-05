import mongoose from 'mongoose';

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    columns: [
      {
        name: String,
        color: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.boards || mongoose.model('boards', boardSchema);
