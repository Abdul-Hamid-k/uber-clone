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

export { createUser }