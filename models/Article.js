var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  snippet: {
    type: String
  },
  url: {
    type: String
  },
  pub_date: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  },
  _id: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
