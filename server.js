var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate");
// mongoose.connect("mongodb://localhost/reactdb"); 
mongoose.connect("mongodb://heroku_wcvjn5pz:g2lm71lirfr6kbr5tf08p8a8n3@ds145649.mlab.com:45649/heroku_wcvjn5pz"); 
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//initialize api routes
app.use("/api", require("./routes/apiRoutes"));
// Main "/" Route. This will redirect the user to our rendered React application
app.use("/", require("./routes/viewRoutes"));

// Listener
app.listen(PORT, function() {
  console.log("App listening for requests on PORT: " + PORT);
});
