import React from 'react';
import { FaUserSecret } from "react-icons/fa";

const RecentUser = () => {
  return (
    <div className='recentuser'>
       <div className="recentuser-name">
          <div className="recentuser-icon">
             <FaUserSecret />
          </div>
           <p>John Doe</p>
       </div> 
    </div>
  )
}

export default RecentUser