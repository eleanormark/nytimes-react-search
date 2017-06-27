// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(articleSearch) {

    console.log(articleSearch);
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
      'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      'q': articleSearch.term,
      'begin_date': articleSearch.begin_date + "0101",
      'end_date': articleSearch.end_date + "0101"
    });
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      console.log(response.data.response.docs)
      let fetchResult = [];
      if (response.data.response.docs[0]) {
        for (let article of response.data.response.docs) {
          let info = {};
          info["title"] = article.headline.main;
          info["pub_date"] = article.pub_date;
          info["url"] = article.web_url;
          info["snippet"] = article.snippet;
          info["art_id"] = article._id;
          fetchResult.push(info);
        }
      }
      // If we don't get any results, return an empty array
      return fetchResult;
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postSaved: function(obj) {
    return axios.post("/api", {
      title: obj.title,
      snippet: obj.snippet,
      url: obj.url,
      pub_date: obj.pub_date,
      art_id: obj.art_id
    });
  },

  deleteSaved: function(id) {
      console.log(id);
      return axios.post("/api/delete", {
          _id: id

      });
  },
};

module.exports = helper;
