import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {name: "", UserId: "", password: ""}

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleUserIdChange = this.handleUserIdChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)

  }
  handleNameChange(event) {
    this.setState({name: event.target.value})
  }
  handleUserIdChange(event) {
    this.setState({UserId: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({Password: event.target.value})
  }

  handleSignupSubmit(event) {
    event.preventDefault();
    this.props.onSubmitSignup(this.state.name);
    //alert(`You are signing up as ${this.state.name}`)
  }
  render() {
    return (

      <form>
      <p><label>Name</label><input type="text" onChange={this.handleNameChange}></input></p>
      <p><label>UserId</label><input type="text" onChange={this.handleUserIdChange}></input></p>
      <p><label>Password</label><input type="text" onChange={this.handlePasswordChange}></input></p>
      <p><button id="submitButton" onClick={this.handleSignupSubmit}>Submit</button></p>
      </form>

    );
  }
}
export default Signup;
