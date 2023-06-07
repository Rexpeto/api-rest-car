import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { router } from './route'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () => {
  console.log(`Funcionando por el puerto ${PORT}`)
})
