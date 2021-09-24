import { getLocations } from '@service/googleApi'
import { Request, Response } from 'express'

export const getLocation = async (req: Request, res: Response) => {
  const { address } = req.body
  const locations = await getLocations(address)
  return res.json(locations)
}
