import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  changeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  getRemainingChars = () => {
    return this.props.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        onChange={this.changeHandler}
        value={this.state.value}/>

        <h3>Remaining characters: {this.getRemainingChars()}</h3>
      </div>
     
     
    );
  }
}

export default TwitterMessage;
