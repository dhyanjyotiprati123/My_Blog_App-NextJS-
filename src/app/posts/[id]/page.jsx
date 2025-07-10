'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const SinglePostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`)
        if (!res.ok) {
          throw new Error('Post not found')
        }
        const data = await res.json()
        setPost(data)
      } catch (err) {
        console.error('Error loading post:', err)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchPost()
  }, [id])

  if (loading) return <p>Loading post...</p>
  if (!post) return <p>Post not found.</p>

  return (
    <div className='singlepost'>
      <div className="singlepost-img relative w-full h-96">
        <Image
          src={`data:image/jpeg;base64,${post.image}`}
          alt={post.title}
          fill
          className='singlepost-pic object-cover'
        />
      </div>

      <div className="singlepost-about p-4">
        <h1 className="singlepost-title">{post.title}</h1>
        <p className="singlepost-desc">{post.desc}</p>
        <h3 className="singlepost-author">
          Posted by <span>{post.author}</span>
        </h3>
      </div>
    </div>
  )
}

export default SinglePostPage
