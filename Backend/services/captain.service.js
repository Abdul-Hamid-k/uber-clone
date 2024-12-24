import CaptainModel from "../models/captain.model.js";

const CreateCaptain = async ({ fullname, email, password, vehicle }) => {
  if (!fullname || !email || !password || !vehicle) {
    throw new Error("Invalid arguments");
  }

  const hashedPassword = await CaptainModel.hashPassword(password);
  const newCaptain = await CaptainModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname
    },
    email,
    password: hashedPassword,
    vehicle: {
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType
    }
  })

  return newCaptain;
}

export { CreateCaptain };