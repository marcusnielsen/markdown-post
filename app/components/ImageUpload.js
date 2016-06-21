var React = require('react');

var ImageUpload = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  handleSubmitBackground: function (e) {
    e.preventDefault();
    this.props.onUpdateBackground(this.state.value);
    this.setState({value: 'Upload Successful'});
  },

  render: function () {
    return (
      <form className="navbar-form navbar-left" onSubmit={this.handleSubmitBackground} style={this.props.imageUploadStyle}>
        <input className="image-input" type="url" value={this.state.value} onChange={this.handleChange} placeholder="enter image url" />
        <button type="submit" className="image-button">Upload</button>
      </form>
    );
  }
});

module.exports = ImageUpload;
