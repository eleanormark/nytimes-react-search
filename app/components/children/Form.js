// Include React
var React = require("react");
var helpers = require("../utils/helpers");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", begin_date: "", end_date: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    console.log("term: " + event.target.value);
    this.setState({ term: event.target.value });

  },

  handleBeginDateChange: function(event) {
    console.log("Begin Date" + event.target.value);
    this.setState({ begin_date: event.target.value });

  },

  handleEndDateChange: function(event) {
    console.log("End Date: " + event.target.value);
    this.setState({ end_date: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    console.log(this.state.begin_date);
    this.props.setTerm(this.state.term, this.state.begin_date, this.state.end_date) ;
  
    // this.props.setBeginDate(this.state.begin_date);
    this.setState({ term: "", begin_date: "", end_date: "" });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="search-term" className="">
                Search Term: &nbsp; 
              </label>

              <input
                value={this.state.term}
                type="text"
                className="form-control"
                id="term"
                onChange={this.handleChange}
                required
                name="search-term"
              />
               
            </div>
            &nbsp; &nbsp; 
            <div className="form-group">
              <label for="begin-year" className="">
                 Begin Year:  &nbsp;
              </label>

              <input
                value={this.state.begin_date}
                type="text"
                className="form-control"
                id="begin_date"
                onChange={this.handleBeginDateChange}
                required
                placeholder="YYYY"
                name="begin-year"
              />
            </div>
             &nbsp; &nbsp; 
            <div className="form-group">
              <label for="end-year" className="">
                 End Year: &nbsp; 
              </label>

              <input
                value={this.state.end_date}
                type="text"
                className="form-control"
                id="end_date"
                onChange={this.handleEndDateChange}
                required
                placeholder="YYYY"
                name="end-year"
              />
        
              </div>
              &nbsp; &nbsp;   
              <button
                className="btn btn-default"
                type="submit"
              >
                Submit
              </button>
            
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
