import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked, faCalendarXmark, faChartPie, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons'

import logo1 from '../assets/logo1.jpg'

export function SideNavigation() {
  const navigate = useNavigate()

  return (
    <div className="navigation-side">
      <div className="navigation-header">
        <img src={logo1} alt="khayas" />
      </div>
      <hr />
      <div className="navigation-body">
        <button onClick={() => { navigate('/admin/dashboard') }}><FontAwesomeIcon icon={faChartPie} /><span>Dashboard Panel</span></button>
        <button onClick={() => { navigate('/admin/events') }}><FontAwesomeIcon icon={faCalendarXmark} /><span>Events Panel</span></button>
        <button onClick={() => { navigate('/admin/supplies') }}><FontAwesomeIcon icon={faBoxesStacked} /><span>Supplies Panel</span></button>
        <button onClick={() => { navigate('/admin/users') }}><FontAwesomeIcon icon={faUsers} /><span>Users Panel</span></button>
        <button onClick={() => { navigate('/') }}><FontAwesomeIcon icon={faRightFromBracket} /><span>Log Out</span></button>
      </div>
    </div>
  )
}
