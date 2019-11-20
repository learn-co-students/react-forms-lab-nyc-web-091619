import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputStr: '',
    };
  }

  tweetChangeHandler = e => {
    this.setState({
      inputStr: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={e => this.tweetChangeHandler(e)}
          value={this.state.inputStr}
          type="text"
          name="message"
          id="message"
        />
        <span>
          Chars left: {this.props.maxChars - this.state.inputStr.length}
        </span>
      </div>
    );
  }
}

export default TwitterMessage;
