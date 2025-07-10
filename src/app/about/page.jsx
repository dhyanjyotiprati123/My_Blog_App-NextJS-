import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='about'>
        <div className="about-img">
          <Image src={"/about.svg"} alt='aboutimg' fill  className='about-pic'/>
        </div>
        <div className="about-text">
          <h1 className="about-title">Blog Post</h1>
          <h2 className="about-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ad officia rerum ipsa sunt sapiente inventore quis obcaecati doloremque beatae.</h2>
          <p className="about-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum beatae aspernatur eos sapiente, illum exercitationem quo sit molestias? Ducimus provident error perferendis nisi! Suscipit dolorum aut delectus sit nihil.</p>
          <button className="about-btn">Learn More</button>
        </div>
    </div>
  )
}

export default page