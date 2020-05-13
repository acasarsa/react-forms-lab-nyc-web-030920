import React from "react";

class LoginForm extends React.Component {
  

  state = {
    username: '',
    password: ''
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
    
      return this.props.handleLogin(this.state)
      
      
    }
  
  }

  // handleSendThru = (event) => {
  //   event.preventDefault()
  //   this.refs.username.value = ''
  //   this.refs.password.value = ''
  //   // this runs before the console.log for the on submit
  // }

  render() {
  //   console.log(this.props.handleLogin)
  //   console.log(this.state.username)
    console.log(this.state)
    
    // console.log(this.props.handleLogin)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} value={this.state.value} ref="username"/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} value={this.state.value} ref="password"/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
