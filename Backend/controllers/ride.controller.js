import { validationResult } from "express-validator"
import { CreateRide } from "../services/ride.service.js"


const CreateUserRide = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { pickup, destination, vehicleType } = req.body

  if (!destination || !pickup) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const newRide = await CreateRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType
    })

    res.status(201).json({ message: 'Ride Created', ride: newRide })
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error ' + e.message })
  }
}

export { CreateUserRide }