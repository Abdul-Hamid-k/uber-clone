import { validationResult } from "express-validator"
import { createUser } from "../services/user.services.js"
import UserModel from "../models/user.model.js";

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), message: "Invalid arguments" });
  }

  const { fullname, email, password } = req.body;
  const newUser = await createUser({ firstname: fullname.firstname, lastname: fullname.lastname, email, password })
  const token = await newUser.generateAuthToken();
  res.cookie('token', token)

  res.status(201).json({ token: token, user: newUser })
}

const loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array(), message: "Invalid arguments" });
  }

  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select('+password');
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" })
  } else {
    const isMatch = await user.comparePassword(password);
    // console.log("mach:", isMatch);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    } else {
      const token = await user.generateAuthToken();
      res.cookie('token', token)
      return res.status(200).json({ user: user, message: "user loggedin" })
    }
  }

}

const logoutUser = async (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({ message: "user logged out" })
}

export { registerUser, loginUser, logoutUser }