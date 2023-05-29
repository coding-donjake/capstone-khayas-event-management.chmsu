import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export function LoginForm() {
  const navigate = useNavigate()

  return (
    <div className="form-login">
      <div className="form-header">
        <h1>KHAYAS</h1>
        <p>Administrator</p>
      </div>
      <div className="form-body">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className="classic-input" id="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="classic-input" id="password" type="password" />
        </div>
        <div className="form-btns">
          <button className='classic-button' onClick={() => { navigate('/admin/dashboard') }}>Log In</button>
        </div>
      </div>
    </div>
  )
}

export function CreateUserForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [position, setPosition] = useState('admin');

  const handleSave = async () => {
    try {
      // Create an object with the username and password
      const userData = {
        username,
        password,
        lastname,
        firstname,
        middlename,
        position,
      };

      // Send a POST request to /users/createUser
      const response = await fetch('/users/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        throw new Error('Failed to save user')
      }

      const data = await response.json()

      // Handle the response data as needed
      console.log(data)
    } catch (error) {
      // Handle any errors
      console.error(error)
    }
  }

  return (
    <div className="form-v1">
      <h2>Create User Account</h2>
      <div className="form-inputs">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            id="lastname"
            type="text"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input
            id="firstname"
            type="text"
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="middlename">Middle name</label>
          <input
            id="middlename"
            type="text"
            value={middlename}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <select
            id="position"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
        </div>
      </div>
      <div className="form-btns">
        <button onClick={handleSave}>
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Create</span>
        </button>
      </div>
    </div>
  )
}
