import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charCount: this.props.maxChars
    };
  }

  changeMessageState = event => {
    let e = event.target.value
    this.setState({
        message: e,
        charCount: this.props.maxChars - e.length
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeMessageState} />
        <p>{this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
