var express = require("express")
var bodyParser = require("body-parser")
var states_api = require("./routes/states.js")
var path = require("path")

var app = express()

app.use(express.static(path.join(__dirname, "client", "dist")))

app.use(bodyParser.json())

app.use('/api', states_api)

//error handling. Page not found.
app.use(function (req, res, next) {
  res.status(404).send("Not Found")
})

//error handling, server error.
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send("Server error")
})

//confirmation that server is running.
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("app running on port", server.address().port)
})