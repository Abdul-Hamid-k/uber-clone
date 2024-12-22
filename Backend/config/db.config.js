import mongoose from 'mongoose'

const ConnectDB = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB Connected...');
  }).catch(() => {
    console.error('Failed to connect to MongoDB');

  });
}

export default ConnectDB;