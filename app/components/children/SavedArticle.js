// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var SavedArticle = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Article(s)</h3>
        </div>
        <div className="panel-body">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.savedArticleInfo.map(function(article, i) {
            return (
              <p key={i}>{article.title} &nbsp;•&nbsp; Saved on {article.date.substring(0,10)}</p>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SavedArticle;
