import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ success: true })
})

app.listen(4000)
