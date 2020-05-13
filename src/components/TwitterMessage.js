import React from "react";
// import React, { useState } from 'react';

class TwitterMessage extends React.Component {


  state = {
    message: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    // Its value should be saved in the component's state and should update on every change to the input. 
  }

  render() {

    let charsCount = this.props.maxChars - this.state.message.length

    // console.log(this.state.message.length)
    // console.log(this.state)
    // console.log(this.props)
    // console.log('maxChars prop value =',this.state.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        {/*  Make this a controlled component by adding the attributes to the <input> element.  */}
        {/* value is the message you are typing in
            onChange is an attribute 
            value is an attribute
         */}
        {charsCount}
      </div>
    );
  }
}

export default TwitterMessage;
