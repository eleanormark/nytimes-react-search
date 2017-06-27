var express = require ('express');
var router = express.Router();
var Article = require('../models/Article');

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
router.get("/saved", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 10
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(10).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
router.post("/saved", function(req, res) {
  console.log("BODY: " + req.body._id);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Article.create({
    title: req.body.title,
    snippet: req.body.snippet,
    url: req.body.url,
    pub_date: req.body.date,
    art_id: req.body.art_id,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

router.put("/saved", function(req, res) {
    console.log(req.body);
    Article.remove({ _id: req.body._id}, function(err) {
        if (!err) {
            res.send("DELETED!");
        } else {
            console.log(err);
        }
    });

});

module.exports = router;