

import express from 'express'
import cors from 'cors'
import { adminjs, adminJsRouter } from './adminJS'
import { sequelize } from './database'
import { router } from './routes'


const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(adminjs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`connected to db`)
  })
  
  console.log(`Server started successfuly at port ${PORT}.`)
})