import { validationResult } from "express-validator"
import { createUser } from "../services/user.service.js"
import UserModel from "../models/user.model.js";
import BlackListToken from "../models/blocklistToken.model.js";

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), message: "Invalid arguments" });
  }
  const { fullname, email, password } = req.body;

  const user = await UserModel.findOne({ email })
  if (user) {
    return res.status(400).json({ message: "User already exists" })
  }

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
    console.log("mach:", isMatch, user);
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
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  await BlackListToken.create({ token });
  res.clearCookie('token');
  res.status(200).json({ message: "user logged out" })
}

const profileUser = async (req, res, next) => {
  // console.log(req.user)
  res.status(200).json({ user: req.user, message: "user loggedin" })
}

export { registerUser, loginUser, logoutUser, profileUser }