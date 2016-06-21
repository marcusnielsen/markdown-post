var React = require('react');
var Textarea = require('react-textarea-autosize').default;
var ContentEditable = require("react-contenteditable").default;

  var Edit = React.createClass({
    handleTextChange: function(evt){
      this.props.handleMarkdownChange(evt.target.value);
    },
    render: function(){
      return (
        <div className="col-md-8 col-md-offset-2">
        <Textarea
          className="edit-area"
          onChange={this.handleTextChange}
          value={this.props.rawMarkdown}
        ></Textarea>
    </div>);
    }
  });

module.exports = Edit;
