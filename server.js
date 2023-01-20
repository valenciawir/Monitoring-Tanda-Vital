const port = process.env.PORT || 8080

const express = require('express')
const app = express()

app.use(express.static('dist'))
app.listen(port, () => console.log(`listening on port ${port}`))
