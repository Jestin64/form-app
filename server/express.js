const express = require('express')
const bodyparser = require('body-parser')
const path = require("path")
const cors = require("cors")
import template from "../template.js"
import devBundle from "./devBundle.js" // in dev mode only


const app = express()
devBundle.compile(app) // in dev mode only

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res)=>{
	res.status(200).send(template())
})


export default app