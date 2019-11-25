import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: "",
    messageLength: 0
  };

  handleChange = event => {
    let currentMessageLength = this.state.message.length;

    if (currentMessageLength < 280) {
      const value = event.target.value;
      const newLength = (currentMessageLength += 1);

      this.setState({ message: value, messageLength: newLength });
    }

    console.log(this.state);
  };

  render() {
    const { maxChars } = this.props.maxChars;

    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <strong>
          Remaining chars: <span> {280 - this.state.messageLength} </span>{" "}
        </strong>
      </div>
    );
  }
}

export default TwitterMessage;
