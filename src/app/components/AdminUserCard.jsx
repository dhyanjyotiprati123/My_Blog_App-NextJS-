import React from 'react'
import RecentUser from './RecentUser'
import ActiveUsers from './ActiveUsers'

const AdminUserCard = () => {
  return (
    <div className='adminusercard'>
        <div className="adminusercard-total">
            <h3>Total Number of Users</h3>
            <h2>98731</h2>
        </div>

        <div className="adminusercard-recent">
           <h3>Recent Users</h3>
           <RecentUser />
           <RecentUser />
           <RecentUser />
        </div>

        <div className="adminusercard-active">
           <h3>Active Users</h3>
           <ActiveUsers />
           <ActiveUsers />
           <ActiveUsers />
        </div>
    </div>
  )
}

export default AdminUserCard