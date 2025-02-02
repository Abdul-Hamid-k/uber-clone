import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'firstname should be at least 2 character long'],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, 'lastname should be at least 2 character lond'],
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'password should be at least 2 character long'],
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [13, 'email should be at least 2 character long'],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email"]
  },
  socketId: {
    type: String
  }
})

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
}

UserSchema.methods.comparePassword = async function (password) {
  // console.log("password", password, this.password);
  return await bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10)
}
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;