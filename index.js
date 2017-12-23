const express = require('express')
const mongoose = require('./db/schema')
const cors = require('cors')

const Quote = mongoose.model('Quote')

const app = express()

app.use(cors())

app.get('/api/quotes', (req, res) => {
	Quote.find()
		.then(quotes => {
			let random = Math.floor(Math.random() * quotes.length)
			res.json(quotes[random])
		})
		.catch(err => console.log(err))
})

app.listen(process.env.PORT || 3001, function() {
	console.log('up and running!')
})
