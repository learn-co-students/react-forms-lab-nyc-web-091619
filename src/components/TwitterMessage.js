import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value 
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value= {this.state.message} />
        <p>You Have {this.props.maxChars - this.state.message.length} characters left  </p>
      </div>
    );
  }
}

export default TwitterMessage;
