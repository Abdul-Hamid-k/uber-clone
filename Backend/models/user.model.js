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
    minlength: [8, 'password should be at least 2 character lond'],
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [13, 'email should be at least 2 character lond']
  },
  socketId: {
    type: String
  }
})

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
  return token;
}

UserSchema.methods.comparePassword = async function (password) {
  console.log(password, this);
  return await bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10)
}
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;