import axios from 'axios'

const getAddressCoordinates = async (address) => {
  const api_key = process.env.GOOGLE_MAP_API
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${api_key}`

  try {
    const responce = await axios.get(url)
    if (responce.data.status === 'OK') {
      const location = responce.data.results[0].geometry.location
      return {
        lat: location.lat,
        lng: location.lng
      }
    } else {
      throw new Error('Failed to fetch address coordinates')
    }
  } catch (err) {
    console.error('Error fetching address coordinates:', err.message)
    throw err
  }
}

const getAddressDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error('Origin and destination must be provided')
  }

  const api_key = process.env.GOOGLE_MAP_API
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${api_key}`

  try {
    const response = await axios.get(url)
    if (response.data.status === 'OK') {

      if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
        throw new Error('No routes found')
      }

      return response.data.rows[0].elements[0]
    } else {
      throw new Error('Failed to fetch distance and time')
    }
  } catch (err) {
    console.error('Error fetching distance and time:', err.message)
    throw err
  }
}

const getAddressAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error('Query must be provided')
  }

  const api_key = process.env.GOOGLE_MAP_API
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&fields=formatted_address&key=${api_key}`

  try {
    const response = await axios.get(url)
    if (response.data.status === 'OK') {
      return response.data.predictions
    } else {
      throw new Error('Failed to fetch autocomplete suggestions')
    }
  } catch (err) {
    console.error('Error fetching autocomplete suggestions:', err.message)
    throw err
  }


}

export { getAddressCoordinates, getAddressDistanceTime, getAddressAutoCompleteSuggestions }