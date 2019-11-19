import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ""
  }

  updateState = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={this.updateState} 
          value={this.state.message}
        />
        <h4>{this.props.maxChars - this.state.message.length}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
