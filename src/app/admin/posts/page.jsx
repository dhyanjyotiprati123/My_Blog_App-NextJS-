"use client"

import React, {useState, useEffect} from 'react';
import PostCard from '@/app/components/PostCard';

const page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const getAllPost = async()=>{
      try {
        const alposts = await fetch('/api/posts');
        const data = await alposts.json();
        console.log(data)
        setPosts(data);
        setLoading(false)
      } catch (error) {
         console.log("failed to fetch" , error.message);
         setLoading(false)
      }
    }
    getAllPost();
  },[]);

   if (loading) {
    return <p>Loading posts...</p>
    }

  return (
    <div className='adminPosts'>
         {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts?.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            img={`data:image/jpeg;base64,${post.image}`}
            desc={post.desc}
            author={post.author}
            id={post._id}
          />
        ))
      )}
    </div>
  )
}

export default page