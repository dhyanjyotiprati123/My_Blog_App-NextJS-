import React from 'react';
import { FcCheckmark } from "react-icons/fc";

const ActiveUsers = () => {
  return (
    <div className='activeuser'>
        <div className="activeuser-icon">
           <FcCheckmark />
        </div>
        <p>
            jane doe
        </p>
    </div>
  )
}

export default ActiveUsers