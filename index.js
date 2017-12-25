const express = require('express')
const mongoose = require('./db/schema')
const cors = require('cors')

const Quote = mongoose.model('Quote')

const app = express()

app.use(cors())

app.get('/api/quotes', (req, res) => {
	Quote.count()
		.exec((err, count) => {
			let random = Math.floor(Math.random() * count)

			Quote.findOne()
				.skip(random)
				.exec()
				.then(quote => {
					res.json(quote)
				})
				.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
})

app.listen(process.env.PORT || 3001, function() {
	console.log('up and running!')
})
