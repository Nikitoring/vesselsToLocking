import { Request, Response } from 'express'
import { shipsDB } from '../databases/shipsDB'

export const index = (req: Request, res: Response) => {
  res.json({
    title: 'Boilerplate for Express + Vue.JS with Typescript'
  })
}
export const getShips = (req: Request, res: Response) => {
  const result = shipsDB.readAllShips()
  console.log('result', result)
  res.json(result)
}

export const addShip = (req: Request, res: Response) => {
  if (!req.body) return
  const result = shipsDB.addShip(req.body)
  console.log('result', result)
  res.send('ok')
}
