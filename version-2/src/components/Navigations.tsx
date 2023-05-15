import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked, faCalendarXmark, faChartPie, faRightFromBracket, faUsers } from '@fortawesome/free-solid-svg-icons'

import logo1 from '../assets/logo1.jpg'

export function SideNavigation() {
  return (
    <div className="navigation-side">
      <div className="navigation-header">
        <img src={logo1} alt="khayas" />
      </div>
      <hr />
      <div className="navigation-body">
        <button><FontAwesomeIcon icon={faChartPie} /><span>Dashboard Panel</span></button>
        <button><FontAwesomeIcon icon={faCalendarXmark} /><span>Events Panel</span></button>
        <button><FontAwesomeIcon icon={faBoxesStacked} /><span>Supplies Panel</span></button>
        <button><FontAwesomeIcon icon={faUsers} /><span>Users Panel</span></button>
        <button><FontAwesomeIcon icon={faRightFromBracket} /><span>Log Out</span></button>
      </div>
    </div>
  )
}
