var React = require('react');
var ImageUpload = require('./ImageUpload');
var url = require("./logo-mp.png");

var NavBar = React.createClass({
  componentWillMount: function () {
    if (this.props.currentPath == '/') {
    this.setState({
      currentview: 'View',
      imageUploadStyle: {visibility: 'visible'},
      modeButtonText: 'View Mode'
    });} else {
      this.setState({
        currentview: 'View',
        imageUploadStyle: {visibility: 'hidden'},
        modeButtonText: 'Edit Mode'
      });
    }
  },
  getInitialState: function () {
    return {
      currentview: 'Edit',
      imageUploadStyle: {visibility: 'visible'},
      modeButtonText: 'View Mode'
    };
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleChangeView: function (e) {
    this.props.onUpdateRawMarkdown();
    // change to location within history
    if (this.props.currentPath == '/') {
    this.setState({
      currentview: 'View',
      imageUploadStyle: {visibility: 'hidden'},
      modeButtonText: 'Edit Mode'
    });
    this.context.router.push({
      pathname: '/view/'
    });
  } else {
    this.setState({
      currentview: 'Edit',
      imageUploadStyle: {visibility: 'visible'},
      modeButtonText: 'View Mode'
    });
    this.context.router.push({
      pathName: '/'
    });
  }
  },
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-left">
            <li><img src={ url } className="logo"></img></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><ImageUpload imageUploadStyle={this.state.imageUploadStyle} onUpdateBackground={this.props.handleUpdateBackground}/></li>
            <li><button className="change navbar-btn" onClick={this.handleChangeView}>
              {this.state.modeButtonText}
            </button></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
