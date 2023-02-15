

import express from 'express'
import { adminjs, adminJsRouter } from './adminJS'
import { sequelize } from './database'


const app = express()

app.use(express.static('public'))

app.use(adminjs.options.rootPath, adminJsRouter)

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`connected to db`)
  })
  
  console.log(`Server started successfuly at port ${PORT}.`)
})