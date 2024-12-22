import { validationResult } from "express-validator"
import { createUser } from "../services/user.services.js"

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

export { registerUser }