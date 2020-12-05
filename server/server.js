import app from "./express"
const Mongoose = require("mongoose")

require('dotenv').config()
const PORT = process.env.PORT
const URI = process.env.MONGO_URI


Mongoose.Promise = global.Promise
Mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
	console.log("Connected to MongoDB")
})
.catch(err=>{
	console.error(err)
})

app.listen(PORT, (err)=>{
	if(err) {return console.error(err)}
	console.log(`Server opened at port ${PORT}`)
})


