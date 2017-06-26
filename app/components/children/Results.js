// Include React
var React = require("react");
var helpers = require("../utils/helpers");

// Creating the Results component
var Results = React.createClass({

  handleSaveResult: function() {
    event.preventDefault();
    helpers.postSaved(this.props.articleInfo).then(function(response) {
      this.props.removeResult(this.props.articleInfo.url)
    }.bind(this))
  },

  handleDeleteResult: function() {
    event.preventDefault();
      this.props.removeResult(this.props.articleInfo.url)
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
           <a target="_blank" href={this.props.articleInfo.url}>{this.props.articleInfo.title}</a>
           &nbsp;•&nbsp; {this.props.articleInfo.pub_date.substring(0,10)}
          <button onClick={this.handleSaveResult} className="btn btn-default btn-xs pull-right">Save</button>
          <a className="pull-right">&nbsp;&nbsp;</a>
          <button onClick={this.handleDeleteResult} className="btn btn-default btn-xs pull-right">Delete</button>
          <p>{this.props.articleInfo.snippet}</p>
        </div>
      </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Results;
