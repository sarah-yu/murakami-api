const mongoose = require('./connection')

const QuoteSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
		min: 30
	}
})

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote
