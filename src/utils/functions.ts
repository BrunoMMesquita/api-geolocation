import { IIlocation } from '@interfaces/Ilocation'

const calculateDistance = ([lat1, lon1], [lat2, lon2]) => {
  const toRadian = angle => (Math.PI / 180) * angle
  const distance = (a, b) => (Math.PI / 180) * (a - b)
  const RADIUS_OF_EARTH_IN_KM = 6371

  const dLat = distance(lat2, lat1)
  const dLon = distance(lon2, lon1)

  lat1 = toRadian(lat1)
  lat2 = toRadian(lat2)

  // Haversine Formula
  const a =
        Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.asin(Math.sqrt(a))

  const finalDistance = RADIUS_OF_EARTH_IN_KM * c

  return Number(finalDistance.toFixed(2))
}

export const getLocationsDistance = (address) => {
  const locations: IIlocation[] = []
  address.forEach(a => {
    const distances = []
    address.forEach(b => {
      if (a !== b) {
        distances.push({
          addressName: b.formatted_address,
          distance: calculateDistance([
            a.geometry.location.lat,
            a.geometry.location.lng
          ], [
            b.geometry.location.lat,
            b.geometry.location.lng
          ])
        })
      }
    })
    locations.push({
      addressName: a.formatted_address,
      distances,
      Nearest: distances.reduce((prev, current) => (prev.distance < current.distance) ? prev : current).addressName,
      Distant: distances.reduce((prev, current) => (prev.distance > current.distance) ? prev : current).addressName
    })
  })

  return locations
}
