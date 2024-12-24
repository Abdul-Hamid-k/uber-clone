import CaptainModel from "../models/captain.model.js";
import { validationResult } from "express-validator";
import { CreateCaptain } from "../services/captain.service.js";
import BlackListToken from "../models/blocklistToken.model.js";


const registerCaptain = async (req, res) => {
  const { fullname, email, password, vehicle } = req.body;
  console.log(fullname, email, password, vehicle)

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), message: "Invalid arguments" });
  }

  const captain = await CaptainModel.findOne({ email })
  if (captain) {
    return res.status(400).json({ message: "Captain already exists" })
  }

  const newCaptain = await CreateCaptain({ fullname, email, password, vehicle })

  const token = await newCaptain.generateAuthToken();
  res.cookie('token', token)

  res.status(201).json({ token: token, captain: newCaptain, message: "Captain registered" })
}

const loginCaptain = async (req, res) => {
  const { email, password } = req.body

  const captain = await CaptainModel.findOne({ email }).select('+password');
  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" })
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" })
  }
  const token = await captain.generateAuthToken();
  res.cookie('token', token)
  return res.status(200).json({ token: token, captain: captain, message: "Captain logged in" })
}

const logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  await BlackListToken.create({ token });

  res.clearCookie('token')
  return res.status(200).json({ message: "Captain logged out" })
}

const profileCaptain = async (req, res) => {
  return res.status(200).json({ captain: req.captain })
}

export { registerCaptain, loginCaptain, logoutCaptain, profileCaptain }