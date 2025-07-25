"use client"
import Link from 'next/link'
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
     email: "",
     password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>{
     const {name, value} = e.target;
     setUserData({...userData, [name]: value});
     
  }

  const handleClick = async(e)=>{
     e.preventDefault();

     try {
        const res=  await fetch("/api/auth/login", {
           method: "POST",
           headers: {
              "Content-Type": "application/json"
           },
           body: JSON.stringify(userData)
        });

        const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        alert(setError);
      } else {
        setSuccess("Login Successful");
        setError("");
        setUserData({ email: "", password: "" });

        setTimeout(() => {
          router.push("/");
        }, 2000);}
     } catch (error) {
         setError(error.message || "Server error");
         alert(setError)
     }
  }

  return (
    <div className='login'>
      <div className="login-header">
         Welcome Back !
      </div>

      <form className="login-form">
        <input type="email" placeholder='Enter Your Email Address' className="login-input" onChange={handleChange} value={userData.email} name='email' />
         <input type="password" placeholder='Enter Your Password' className="login-input" onChange={handleChange} value={userData.password} name='password' />
         <button className="login-btn" onClick={handleClick}>
            Login
         </button>
      </form>

      <div className="login-links">
        <p>If You don't have a account</p>
        <Link className='login-link' href={"/register"}>Create a account</Link>
      </div>
    </div>
  )
}

export default page