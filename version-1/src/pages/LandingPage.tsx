import React from 'react'
import LoginForm from '../components/Forms';

function LandingPage() {

  const screenStyle = {
    'justifyContent': 'center',
  }

  const verticalSpacerStyle = {
    'width': '100%',
    'height': '4rem',
  }

  return (
    <div className="screen" style={screenStyle}>
      <div style={verticalSpacerStyle}></div>
      <LoginForm></LoginForm>
      <div style={verticalSpacerStyle}></div>
    </div >
  )
}

export default LandingPage