/* eslint-disable @typescript-eslint/no-explicit-any */

import { db } from './databaseConnections'

const readAllShips = async () => {
  try {
    const query = 'SELECT * FROM ships'
    let rowList: { [key: string]: any }[] = []
    db.run('CREATE TABLE ships(name TEXT,type TEXT, sediment FLOAT, barge BOOLEAN)')
    db.run(query, null, (rows: { [key: string]: any }[], err: string) => {
      if (err) console.error(err)
      rowList = rows
    })
    return rowList
  } catch (err) {
    console.error(err)
    throw err
  }
}

const addShip = async (params = []) => {
  try {
    if (!params.length) return console.log('doesn`t params [name, type, sediment, barge]')
    db.run('CREATE TABLE ships(name TEXT,type TEXT, sediment FLOAT, barge BOOLEAN)')
    db.run('INSERT INTO ships(name, type, sediment, barge) VALUES(?, ?, ?, ?)', params, (err: { message: string }) => {
      if (err) {
        return console.log(err.message)
      }
      return
    })
  } catch (error) {}
}
const shipsDB = { readAllShips, addShip }

export { shipsDB }
