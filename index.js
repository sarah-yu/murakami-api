const express = require('express')
const mongoose = require('./db/schema')

const Quote = mongoose.model('Quote')

const app = express()

app.get('/api/quotes', (req, res) => {
	Quote.find()
		.then(quotes => {
			let random = Math.floor(Math.random() * quotes.length)
			res.json(quotes[random])
		})
		.catch(err => console.log(err))
})

app.listen(3001, () => {
	console.log('app listening on port 3001')
})
