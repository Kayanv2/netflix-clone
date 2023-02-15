// src/server.ts

import express from 'express'
import { sequelize } from './database'


const app = express()

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`connected to db`)
  })
  
  console.log(`Server started successfuly at port ${PORT}.`)
})