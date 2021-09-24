import express from 'express'
import cors from 'cors'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(routes)

app.get('/', (req, res) => {
  return res.json({ success: true })
})

app.listen(4000)
