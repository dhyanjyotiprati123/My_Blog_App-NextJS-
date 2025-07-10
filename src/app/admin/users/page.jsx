"use client";

import UserCard from '@/app/components/UserCard'
import React, {useState, useEffect} from 'react';

const page = () => {
  const [user, setUser] = useState([]);
  
  useEffect(()=>{
    const getUser = async()=>{
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        if(res.ok){
          setUser(data.users)
        }
        else{
          setUser([])
        }
      } catch (error) {
        console.log("failed to fetch", error.message)
      }
    }
     getUser()
  },[])

  console.log(user)
  return (
    <div className='users'>
       {
         user?.map((u) => <UserCard key={u._id} user={u} />)
       }
    </div>
  )
}

export default page