"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
  const [userinput, setUserInput] = useState({
    name:"",
    email:"",
    mobile:"",
    message:""
  });

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setUserInput({...userinput, [name]: value})
  };

const handleClick =async(e)=>{
  e.preventDefault();
  try {
    const res = await fetch("api/contact", {
       method: "POST",
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(userinput)
    });

    if(res.ok){
       alert("message sent");
       setUserInput({
          name:"",
          email:"",
          mobile:"",
          message:""
       })
    }
    
  } catch (error) {
    console.log(error.message);
    alert("mail not sent");
  }
}

  return (
    <div className='contact'>
        <div className="contact-wrapper">
           <h1 className="contact-title">Contact us</h1>
           <div className="contact-main">
              <div className="contact-left">
                 <form className="contact-form">
                   <input type="text" className="contact-input" placeholder='Enter Your Name' name='name' value={userinput.name} onChange={handleChange} />
                   <input type="email" className="contact-input" placeholder='Enter Your Email' name='email' value={userinput.email} onChange={handleChange} />
                   <input type="text" className="contact-input" placeholder='Enter Your Mobile Number' name='mobile' value={userinput.mobile} onChange={handleChange} />
                   <textarea className='contact-area' placeholder='Enter Your Message Here' rows={8} name='message' value={userinput.message} onChange={handleChange} />
                   <button className="contact-btn" onClick={handleClick}>Submit</button>
                 </form>
              </div>
              <div className="contact-right">
                  <Image src={"/contact.svg"} alt='contact image' className='contact-img' fill />
              </div>
           </div>
        </div>
    </div>
  )
}

export default page