import mongoose from 'mongoose';

const { Schema } = mongoose;

const columnSchema = new Schema(
  {
    boardId: String,
    name: String,
    color: String,
  },
  { timestamps: true }
);

export default mongoose.models.columns ||
  mongoose.model('columns', columnSchema);
