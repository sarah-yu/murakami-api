const Quote = require('./schema')
const quotes = require('./seeds.json')

Quote.remove({})
	.then(() => {
		return Quote.collection.insert(quotes)
	})
	.then(() => {
		process.exit()
	})
