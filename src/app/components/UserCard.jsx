import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { LiaAddressCardSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Image from 'next/image';

const UserCard = ({user}) => {
  return (
    <div className='usercard'>
        <div className="usercard-name">
            <div className="usercard-avatar">
               <Image  className="usercard-person" alt='user' fill src={"/avatar.webp"} />
            </div>
            <div className="usercard-title">
                {user.name}
            </div>
        </div>
        <div className="usercard-details">
            <p>
              <span><TfiEmail /></span> 
              {user.email}
            </p>
             <p>
              <span><TfiHeadphoneAlt /></span> 
              +91 {user.phone}
            </p>
             <p>
              <span><LiaAddressCardSolid /></span> 
               Milky Way,Solar System
            </p>
        </div>
        <div className="usercard-info">
            <p>Joined At <span>12-07-2023</span></p>
            <p>Number of posts <span>34</span></p>
        </div>
    </div>
  )
}

export default UserCard