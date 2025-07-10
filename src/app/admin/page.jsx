import React from 'react'
import AdminPcard from '../components/AdminPcard'
import AdminUserCard from '../components/AdminUserCard'

const page = () => {
  return (
    <div className='admin'>
        
           <div className="admin-top">
             <AdminPcard />
           </div> 
           <div className="admin-bottom">
              <AdminUserCard />
           </div>
        
    </div>
  )
}

export default page