var React = require('react');
var Remarkable = require('remarkable');
var md = new Remarkable({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     true,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  linkify:      false,        // Autoconvert URL-like text to links
});

var View = React.createClass({
  rawMarkdown: function () {
    return { __html: md.render(this.props.rawMarkdown)};
  },
  render: function () {
    return (
      <div>
        <div className="background-image" style={{backgroundImage: 'url(' + this.props.imgUrl +')'}} ></div>
        <div className="col-md-6 col-md-offset-3" dangerouslySetInnerHTML={this.rawMarkdown()}></div>
      </div>
    );
  }
});

module.exports = View;
