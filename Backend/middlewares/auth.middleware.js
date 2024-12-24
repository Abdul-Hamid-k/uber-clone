import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import BlackListToken from "../models/blocklistToken.model.js";
import CaptainModel from "../models/captain.model.js";

const authUser = async (req, res, next) => {

  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  // console.log('token', token)


  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const isBlocklisted = await BlackListToken.findOne({ token });
  if (isBlocklisted) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decode)

    const user = await UserModel.findOne({ _id: decode._id })
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" })
    }
    req.user = user
    return next()
  } catch (err) {
    return res.status(401).json({ error: err.message, message: "Unauthorized" })
  }
}

const authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.header.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const isBlocklisted = await BlackListToken.findOne({ token });
  if (isBlocklisted) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("caption", decode)
    const captain = await CaptainModel.findOne({ _id: decode._id });
    // console.log("caption", captain)
    if (!captain) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    req.captain = captain
    next()
  } catch (err) {
    return res.status(401).json({ error: err.message, message: "Unauthorized" })
  }
}

export { authUser, authCaptain };