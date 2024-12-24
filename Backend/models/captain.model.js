import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const CaptainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      trim: true,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  }
  , email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email"]
  }
  , password: {
    type: String,
    required: true,
    trim: true,
    select: false,
    minlength: [8, "Password must be at least 8 characters long"]
  }
  , socketId: {
    type: String,
  }
  , status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Color must be at least 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Plate must be at least 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ['car', 'motorcycle', 'auto'],
    }

  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    }
  }
})

CaptainSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token
}

CaptainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

CaptainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const CaptainModel = mongoose.model('Captain', CaptainSchema);

export default CaptainModel;