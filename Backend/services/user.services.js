import UserModel from "../models/user.model.js";

const createUser = async ({ firstname, lastname, email, password }) => {

  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  const hashedPassword = await UserModel.hashPassword(password);
  const newUser = await UserModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password: hashedPassword,
  })

  return newUser;
}

const getUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("All fields are required");
  }
  const user = await UserModel.findOne({ email });
  const isMatch = await user.comparePassword({ password });
  console.log(isMatch);
  // const users = await UserModel.find({ email: email, password: UserModel.comparePassword(password) });
  return user;
}

export { createUser, getUser }