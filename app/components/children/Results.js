// Include React
var React = require("react");
var helpers = require("../utils/helpers");

// Creating the Results component
var Results = React.createClass({

  handleSubmit: function() {
    event.preventDefault();
    helpers.postSaved(this.props.articleInfo).then(function(response) {
      console.log("Response");
      console.log(this.props);
      // this.props.removeResult(this.props.articleInfo._id)
    }.bind(this))
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <button onClick={this.handleSubmit} className="btn btn-default btn-xs">Save</button>
           &nbsp; &nbsp; 
           <a target="_blank" href={this.props.articleInfo.url}>{this.props.articleInfo.title}</a>
           &nbsp;•&nbsp; {this.props.articleInfo.pub_date.substring(0,10)}
      </div>
        <div className="panel-body">
          <p>{this.props.articleInfo.snippet}</p>
        </div>
      </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Results;
