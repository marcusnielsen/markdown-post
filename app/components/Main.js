/*jshint esversion: 6 */
var React = require('react');
var NavBar = require('./NavBar');

var introText = "# Welcome \n\nRemove this text and start to write your own story. When you finished, upload a beautiful photo in the form above and press *View Mode*. Lean back and be proud of your masterpiece. \n\nStep-by-step guide: \n1. Write your masterpiece \n2. Find beautiful photo online \n3. Copy-Paste link in form above. \n4. Press *View Mode*";

var Main = React.createClass({
  getInitialState: function () {
    return ({ backgroundImage: "https://images.unsplash.com/photo-1440613905118-99b921706b5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d46f4d7f29ff0d8d6c73c85d36605664",
    rawMarkdown: introText,
    formVisibility: true});
  },
  handleUpdateBackground: function (val) {
    this.setState({
      backgroundImage: val
    });
  },
  handleUpdateRawMarkdown: function () {
    // eventhandler when button toggle
    /*
    this.setState({
      rawMarkdown: this.state.rawMarkdown
    });
    */
  },
  handleMarkdownChange: function (val) {
    this.setState({
      rawMarkdown: val
    });
  },
  render: function () {
    var childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      imgUrl: this.state.backgroundImage,
      rawMarkdown: this.state.rawMarkdown,
      handleMarkdownChange: this.handleMarkdownChange,
      rawMarkdownOut: this.state.rawMarkdownOut,
    }));
    return (
      <div className="container">
        <NavBar handleUpdateBackground={this.handleUpdateBackground} onUpdateRawMarkdown={this.handleUpdateRawMarkdown}
        currentPath={this.props.location.pathname}/>
        { childrenWithProps }
      </div>
    );
  }
});

module.exports = Main;
