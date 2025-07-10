"use client"

import Link from 'next/link'
import React, {useState, useEffect} from 'react'

const NavbarBtns = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async ()=>{
        try {
          const res = await fetch("/api/auth/check", {
            method: "GET",
            credentials: "include"
          });
          
          if(res.ok){
            const data =await res.json();
            console.log("data",data)
            setUser(data.user);
          }
          else{
            setUser(null)
          }
        } catch (error) {
           setUser(null);
           alert(error.message);
        }
        finally{
          setIsLoading(false)
        }
      }

      checkAuth ();
    },[])

  return (
    <div className='navbar-btns'>
          {!user ? (
        <>
          <Link className='navbar-btn' href="/login">Login</Link>
          <Link className='navbar-btn' href="/register">Register</Link>
        </>
      ) : (
        <> 
          <div className="navbar-loginbox">
            <button className='navbar-btn' onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              window.location.reload();
            }}>
            Logout
           </button>

           <Link href={"/blog"} className='navbar-btn'>Create Blog</Link>
          </div>
          
          {user.Admin === true && (
            <Link className='navbar-btn' href="/admin">Admin</Link>
          )}
        </>
      )}
        
       
    </div>
  )
}

export default NavbarBtns