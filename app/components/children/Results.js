// Include React
var React = require("react");
var helpers = require("../utils/helpers");

// Creating the Results component
var Results = React.createClass({

  handleSubmit: function() {
    event.preventDefault();
    helpers.postSaved(this.props.articleInfo).then(function(response) {
      console.log("Response=================");
      console.log(this.props);
      this.props.removeResult(this.props.articleInfo._id)
    }.bind(this))
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <button type="submit" className="btn btn-default btn-sm">Save</button>
            </div>
          </form>
          <a target="_blank" href={this.props.articleInfo.url}>{this.props.articleInfo.title}</a>
      </div>
        <div className="panel-body">
          <p>From: {this.props.articleInfo.pub_date}</p>
          <p>{this.props.articleInfo.snippet}</p>
        </div>
      </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Results;
