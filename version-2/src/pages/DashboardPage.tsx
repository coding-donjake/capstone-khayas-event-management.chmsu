import React from 'react'
import { SideNavigation } from '../components/Navigations'

function DashboardPage() {
  return (
    <>
      <SideNavigation />
      <div className="offset">
        <h1>Panel Name</h1>
        <div className="block">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore vero, aperiam asperiores consequatur quisquam libero ad officia dolores saepe neque cumque nulla consequuntur facilis. Voluptatibus alias nemo perspiciatis enim!
        </div>
      </div>
    </>
  )
}

export default DashboardPage