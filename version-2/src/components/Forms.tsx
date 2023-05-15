import React from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="form-login">
      <div className="form-header">
        <h1>KHAYAS</h1>
        <p>Administrator</p>
      </div>
      <div className="form-body">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button onClick={() => { navigate('/dashboard') }}>Log In</button>
      </div>
    </div>
  )
}
