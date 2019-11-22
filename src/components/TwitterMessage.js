import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={(event) => this.handleInput(event)}
          value={this.state.input}
        />
        <h3>{this.props.maxChars - this.state.input.length} remaining.</h3>
      </div>
    );
  }
}

export default TwitterMessage;
