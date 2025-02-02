import { getAddressAutoCompleteSuggestions, getAddressCoordinates, getAddressDistanceTime } from "../services/map.service.js";
import { validationResult } from 'express-validator'

const getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const address = req.query.address;

  try {
    const coordinates = await getAddressCoordinates(address);
    return res.status(200).json(coordinates);
  } catch (error) {
    return res.status(404).json({ message: "Coordinate not found" });
  }
}

const getDistanceTime = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { origin, destination } = req.query;

  try {
    const distanceTime = await getAddressDistanceTime(origin, destination);
    return res.status(200).json(distanceTime);
  } catch (error) {
    return res.status(404).json({ message: "Distance and time not found: " + error.message });
  }
}

const getAutoCompleteSuggestions = async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { input } = req.query;

  try {
    const suggestions = await getAddressAutoCompleteSuggestions(input);
    return res.status(200).json(suggestions);
  } catch (error) {
    return res.status(404).json({ message: "Suggestions not found" });
  }

}

export { getCoordinates, getDistanceTime, getAutoCompleteSuggestions }