import axios from 'axios'
import { getLocationsDistance } from '@utils/functions'
const key = 'AIzaSyBIO3ow9hTdOGF3IVOhPVhaFMnzkCPjQio'

export const getLocations = async (address: string[]) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address.join(',+')},+CA&key=${key}`
    const res = await axios.get(url)

    if (res.data && res.data.results && !!res.data.results.length) {
      const geolocation = getLocationsDistance(res.data.results)
      return geolocation
    }

    return []
  } catch (err) { }
}
