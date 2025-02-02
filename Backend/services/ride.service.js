import RideModel from '../models/ride.model.js'
import { getAddressDistanceTime } from './map.service.js'
import crypto from 'crypto';

const getFare = async (pickup, destination) => {
  if (!pickup || !destination) {
    throw new Error('Pickup and destination are required')
  }

  const distanceTime = await getAddressDistanceTime(pickup, destination)

  const baseFare = {
    auto: 30,
    car: 50,
    motorcycle: 20
  }

  const farePerKm = {
    auto: 10,
    car: 15,
    motorcycle: 8
  };

  const farePerMin = {
    auto: 2,
    car: 3,
    motorcycle: 1.5
  };

  // console.log(distanceTime)
  const fare = {
    auto: baseFare.auto + (farePerKm.auto * (distanceTime.distance.value / 1000)) + ((distanceTime.duration.value / 60) * farePerMin.auto),
    car: baseFare.car + (farePerKm.car * (distanceTime.distance.value / 1000)) + ((distanceTime.duration.value / 60) * farePerMin.car),
    motorcycle: baseFare.motorcycle + (farePerKm.motorcycle * (distanceTime.distance.value / 1000)) + ((distanceTime.duration.value / 60) * farePerMin.motorcycle)
  };
  return fare;
}

const generateOTP = (num) => {
  if (!num || num <= 0) throw new Error('Number of OTP digits must be greater than 0');
  const otp = crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, '0');
  return otp;
}

const CreateRide = async ({ user, pickup, destination, vehicleType }) => {
  if (!user || !destination || !vehicleType || !pickup) throw new Error('All Fields are required')
  const fare = await getFare(pickup, destination)
  const newRide = await RideModel.create(
    {
      user,
      pickup,
      destination,
      otp: generateOTP(6),
      fare: fare[vehicleType]
    }
  );
  // console.log(newRide)
  return newRide
}

export { CreateRide }