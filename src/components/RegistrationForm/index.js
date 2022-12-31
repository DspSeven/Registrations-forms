// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationsForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstnameResponse: '',
    lastnameResponse: '',
    isFormSubmitted: false,
  }

  // storing first name
  getFirstname = event => {
    this.setState({firstName: event.target.value})
  }

  // storing last name
  getLastname = event => {
    this.setState({lastName: event.target.value})
  }

  // bluring first name
  blurFirstname = () => {
    const {firstName} = this.state
    const checkIfEmptyOrNot = firstName !== ''
    this.setState({firstnameResponse: !checkIfEmptyOrNot})
  }

  // bluring last name
  blurLastname = () => {
    const {lastName} = this.state
    const checkIfEmptyOrNot = lastName !== ''
    this.setState({lastnameResponse: !checkIfEmptyOrNot})
  }

  // starting another registrations
  onClickSubmitAnotherResponse = () => {
    this.setState({
      isFormSubmitted: false,
      firstName: '',
      lastName: '',
    })
  }

  submitUserDetails = event => {
    event.preventDefault()
    const {
      firstName,
      lastName,
      firstnameResponse,
      lastnameResponse,
      isFormSubmitted,
    } = this.state
    const checkFirstName = firstName !== ''
    console.log(checkFirstName)
    const checkLastName = lastName !== ''
    console.log(checkLastName)
    if (checkFirstName && checkLastName) {
      this.setState({isFormSubmitted: !isFormSubmitted})
    }
    this.setState({
      firstnameResponse: !checkFirstName,
      lastnameResponse: !checkLastName,
    })
  }

  userRegisterDetails = () => {
    console.log('user page')
    const {firstnameResponse, lastnameResponse} = this.state
    return (
      <div>
        <h1>Registrations</h1>
        <form onSubmit={this.submitUserDetails}>
          <div>
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              onChange={this.getFirstname}
              onBlur={this.blurFirstname}
            />
            {firstnameResponse && <p>Required</p>}
          </div>
          <div>
            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              onChange={this.getLastname}
              onBlur={this.blurLastname}
            />
            {lastnameResponse && <p>Required</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  userSubmittedSuccessfully = () => {
    console.log('user submitted successfully')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-image"
        />
        <p>Submitted Successfully</p>
        <button
          type="button"
          className="submit-button"
          onClick={this.onClickSubmitAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {firstName, lastName, isFormSubmitted} = this.state
    console.log(isFormSubmitted)
    return (
      <div>
        {isFormSubmitted
          ? this.userSubmittedSuccessfully()
          : this.userRegisterDetails()}
      </div>
    )
  }
}
export default RegistrationsForm
