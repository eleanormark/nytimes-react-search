// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var SavedArticle = require("./children/SavedArticle");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", searchBegindate:"", searchEnddate:"", results: [], savedArticls: [] };
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {
    
   if (this.state.searchTerm !== "") {

      var obj = {      
        term: this.state.searchTerm,
        begin_date: this.state.searchBegindate,
        end_date: this.state.searchEnddate
      };

      // Run the query for the address
      helpers.runQuery(obj).then(function(data) {
        if (data !== this.state.results) {
          this.setState({ results: data });
        } 
      }.bind(this));

      this.setState({searchTerm: ""});
   }

  },

  // This function allows childrens to update the parent.

  removeResult: function(id) {
    let indexToRemove = -1

    for (let i = 0; i < this.state.results.length; i++) {
      if (this.state.results[i]._id === id) {
        indexToRemove = i
      }
    }
    this.state.results.splice(indexToRemove, 1)
    this.setState({ results: this.state.results})
  },
  // This function allows childrens to update the parent.
  setTerm: function(term, begin_date, end_date) {
    this.setState({ searchTerm: term });
    this.setState({ searchBegindate: begin_date });
    this.setState({ searchEnddate: end_date });
  },

  // Here we render the function
  render: function() {
    return (
      <div className="container">

        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Search</h2>
          </div>
        </div>

        <div className="row">
          <Form setTerm={this.setTerm} />
        </div>

        <div className="row">
          {this.state.results.map(function(res, i) {
                return (
                  <Results removeResult={this.removeResult} articleInfo={res} key={i} />
                );
          }.bind(this))}
        </div>

        <div className="row">
          <SavedArticle savedArticleInfo={this.state.savedArticls} />
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;