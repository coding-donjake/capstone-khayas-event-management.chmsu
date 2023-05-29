import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

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
          <input id="username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button onClick={() => { navigate('/admin/dashboard') }}>Log In</button>
      </div>
    </div>
  )
}

export function CreateUserForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [position, setPosition] = useState('admin');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Create an object with the form data
    const formData = {
      username,
      password,
      firstname,
      lastname,
      middlename,
      position,
    };
    // Make a POST request to the desired URL
    fetch('/users/createUser', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
        // Navigate to the desired location
        navigate('/desired-location');
      })
      .catch(error => {
        console.error(error);
      });
  };

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
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input
            id="firstname"
            type="text"
            value={firstname}
            onChange={event => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            id="lastname"
            type="text"
            value={lastname}
            onChange={event => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="middlename">Middle name</label>
          <input
            id="middlename"
            type="text"
            value={middlename}
            onChange={event => setMiddleName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <select
            id="position"
            value={position}
            onChange={event => setPosition(event.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
        </div>
      </div>
      <div className="form-btns">
        <button onClick={handleFormSubmit}>
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Create</span>
        </button>
      </div>
    </div>
  );
}
