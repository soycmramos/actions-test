import { config } from 'dotenv'
import express from 'express'

config()

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello world',
    env: process.env.NODE_ENV,
    root: process.cwd(),
    date: new Date().toLocaleDateString('es-co', {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  })
})

export default app