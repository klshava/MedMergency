const express = require('express')
const app = express()
//const session = require('express-session')
const mainRoutes = require('./mainRoutes')
const bodyParser = require('body-parser')

app.use('/public', express.static('./public'))

app.use('/', mainRoutes)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
