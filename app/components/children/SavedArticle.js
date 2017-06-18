// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var SavedArticle = React.createClass({

  handleDelete: function(article) {

  console.log("delete", article);
    helpers.deleteSave(article.title).then(function(data) {
       this.getArticles();

    }.bind(this));
  }.bind(this),

  // Here we describe this component's render method
  render: function() {
    var that = this;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Article(s)</h3>
        </div>
        <div className="panel-body">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.savedArticleInfo.map(function(articleInfo, i) {
            return (
              <div key={i}>
                <button onClick={that.handleDelete.bind(that, articleInfo)} className="btn btn-default btn-xs">Delete</button>
                &nbsp; &nbsp; 
                <a target="_blank" href={articleInfo.url}>{articleInfo.title}</a>
                &nbsp;•&nbsp;Saved Date {articleInfo.date.substring(0,10)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SavedArticle;