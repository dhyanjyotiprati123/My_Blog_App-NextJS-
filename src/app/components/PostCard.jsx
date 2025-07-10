import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { GrLinkNext } from "react-icons/gr";

const PostCard = ({title, img, desc, author,id}) => {
  return (
    <div className='postcard'>
        <div className="postcard-title">
           {title}
        </div>
        <div className="postcard-pic">
           <Image src={img} alt='postimage' fill className='postcard-img' />
        </div>
        <div className="postcard-about">
            <h5>{desc}</h5>
            <p>posted by <span>{author}</span></p>
        </div>
        <div className="postcard-control">
            <Link href={`/posts/${id}`} className='postcard-link' >
                Learn More
                <span><GrLinkNext /></span>
            </Link>
        </div>
    </div>
  )
}

export default PostCard