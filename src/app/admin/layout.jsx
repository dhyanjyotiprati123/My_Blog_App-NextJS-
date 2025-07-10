import React from 'react';
import Link from 'next/link';
import { GrUserWorker } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { TbLogs } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";
import { TbDeviceAnalytics } from "react-icons/tb";
import { ImHome } from "react-icons/im";

export default function AdminLayout({children}){
    return(
      <div className="adminLayout">
         <div className="adminLayout-sidebar">
           <h2>
             <p><GrUserWorker /></p>
             hello User
            </h2>
           <div className="adminLayout-links">

              <Link href={"/admin"} className='adminLayout-link'>
               <p><ImHome /></p>
               Home
             </Link>
             
             <Link href={"/admin/users"} className='adminLayout-link'>
               <p><CiUser /></p>
               Users
             </Link>
             <Link href={"/admin/posts"} className='adminLayout-link'>
              <p><TbLogs /></p>
               Posts
             </Link>
             <Link href={"/admin/stats"} className='adminLayout-link'>
              <p><ImStatsBars /></p>
               Stats
             </Link>
             <Link href={"/admin/analytics"} className='adminLayout-link'>
              <p><TbDeviceAnalytics /></p>
              Analytics
             </Link>
             
           </div>
         </div>
         <div className="adminLayout-pages">
            {children}
         </div>
      </div>
    )
}