import express from "express"
import path from "path"

const app = express()
const __dirname = path.resolve()

app.use(express.static(__dirname))

app.listen(3000)
