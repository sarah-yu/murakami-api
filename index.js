const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('hello murakami')
})

app.listen(3001, () => {
	console.log('app listening on port 3001')
})
