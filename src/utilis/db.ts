import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB || '');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to Mongo');
  }
};

export default connect;
