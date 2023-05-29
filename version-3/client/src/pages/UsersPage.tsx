import React from 'react'
import { SideNavigation } from '../components/Navigations'
import { CreateUserForm } from '../components/Forms'

function UsersPage() {
  return (
    <>
      <SideNavigation />
      <div className="page-content-wrapper">
        <h1>Users</h1>
        <hr />
        <CreateUserForm />
      </div>
    </>
  )
}

export default UsersPage