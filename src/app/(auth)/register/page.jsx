"use client"
import Link from 'next/link'
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';


const page = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
     name: "",
     email: "",
     password: "",
     phone: "",
     confirmPassword : "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>{
     const {name, value} = e.target;
     setUserData({...userData, [name]: value})
  }


  const handleSubmit = async(e)=>{
     e.preventDefault();

     const {name, email, phone, password, confirmPassword} = userData;
    
     const phoneNo = Number(phone)
     

     if(password !== confirmPassword){
       setError("Passwords did't match");
       return
     }


     try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name, email, password, phone:phoneNo})
        });

        const data = await res.json();

        if(!res.ok){
          setError(data.message || "Something went wrong")
        }else{
          setSuccess("Account Created Successfully");
          setUserData({
             name: "",
             email: "",
             password: "",
             phone: "",
             confirmPassword : ""
          });

          setTimeout(() => {
             router.push("/login")
          },2000)
        }
     } catch (error) {
        setError(error.message || "server error please try again")
     }
  }

  return (
    <div className='register'>
       <div className="register-header">
         Create Your Account
       </div>
       <form className="register-form">
         <input type="text" placeholder='Full Name'  className="register-input" name='name' value={userData.name} onChange={handleChange}  />
         <input type="email" placeholder='Email Address'  className="register-input" name='email' value={userData.email} onChange={handleChange} />
         <input type="number" placeholder='Phone Number'  className="register-input" name='phone' value={userData.phone} onChange={handleChange} />
         <input type="password" placeholder='Password'  className="register-input" name='password' value={userData.password} onChange={handleChange} />
         <input type="password" placeholder='confirm Password'  className="register-input" name='confirmPassword' value={userData.confirmPassword} onChange={handleChange} />
         <button className="register-btn" onClick={handleSubmit}>
           Create
         </button>
       </form>
       <div className="register-links">
         <p>If You already have an account</p>
         <Link className='register-link' href={"/login"}>click here to login</Link>
       </div>
    </div>
  )
}

export default page