var React = require('react');
var ContentEditable = require("react-contenteditable").default;

  var Edit = React.createClass({
    handleTextChange: function(evt){
      var val = evt.target.value;
      //this.setState({html: evt.target.value});
      //this.props.handleMarkdownChange(evt.target.value);
    },
    render: function(){
      console.log('edit ' + this.props.rawMarkdown);
      return (<ContentEditable
                html={this.props.rawMarkdown} // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={this.handleTextChange} // handle innerHTML change
                className="editor col-md-8 col-md-offset-2"
              />);
    }
  });

module.exports = Edit;
