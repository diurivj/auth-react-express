import React, { Component } from 'react'
import WrappedNormalSignupForm from './SignupForm'

class Signup extends Component {
  render() {
    return (
      <div style={{ width: '50vw' }}>
        <WrappedNormalSignupForm />
      </div>
    )
  }
}

export default Signup
