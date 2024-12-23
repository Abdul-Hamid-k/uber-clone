import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import BlackListToken from "../models/blocklistToken.model.js";

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

    const user = await UserModel.findOne(decode._id)
    req.user = user
    return next()
  } catch {
    return res.status(401).json({ message: "Unauthorized" })
  }
}

export default authUser;