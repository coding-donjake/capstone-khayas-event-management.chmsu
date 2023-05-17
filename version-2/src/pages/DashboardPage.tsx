import React from 'react'
import { SideNavigation } from '../components/Navigations'

function DashboardPage() {
  return (
    <>
      <SideNavigation />
      <div className="offset">
        <h1>Dashboard</h1>
        <div className="blocks-wrapper">
          <div className="block" style={{ backgroundColor: 'rgb(249 115 22)' }}>
            <h2>Upcoming Events</h2>
            <span>10</span>
          </div>
          <div className="block" style={{ backgroundColor: 'rgb(14 165 233)' }}>
            <h2>Current Events</h2>
            <span>2</span>
          </div>
          <div className="block" style={{ backgroundColor: 'rgb(34 197 94)' }}>
            <h2>Catered Events</h2>
            <span>20</span>
          </div>
          <div className="block" style={{ backgroundColor: 'rgb(239 68 68)' }}>
            <h2>Canceled Events</h2>
            <span>20</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage