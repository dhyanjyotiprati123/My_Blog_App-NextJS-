import React from 'react';
import { BsFileEarmarkPost } from "react-icons/bs";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import RecentPost from './RecentPost';
import RecentlyVisited from './RecentlyVisited';

const AdminPcard = () => {
  return (
    <div className='adminPcard'>
       <div className="adminPcard-left">
          <div className="adminPcard-total">
            <h2>Total Number of Posts <p><BsFileEarmarkPost /></p></h2>
            <h3>
              <p><MdOutlineConfirmationNumber /></p>
               56321
            </h3>
          </div>
       </div> 
       <div className="adminPcard-right">
         <div className="adminPcard-recent">
            <h2 className='adminPcard-recent-title'>Recent Posts</h2>
            <RecentPost />
            <RecentPost />
         </div>
         <div className="adminPcard-visited">
            <h2 className="adminPcard-visited-title">
              Recently Visited
            </h2>
            <RecentlyVisited />
            <RecentlyVisited />
         </div>
       </div>
    </div>
  )
}

export default AdminPcard