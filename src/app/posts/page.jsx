"use client"

import React, {useEffect, useState} from 'react'
import PostCard from '../components/PostCard'

const page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

   useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts')
        const data = await res.json()
        setPosts(data)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch posts:', err)
        setLoading(false)
      }
    }

    fetchPosts()
  }, []);

    if (loading) {
    return <p>Loading posts...</p>
    }

  return (
    <div className='posts'>
    
         {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
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