import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import { Post, User } from '@/lib/models'


export async function GET() {
  try {
    await dbConnect()

    const posts = await Post.find()
      .populate('author', 'name') 
      .sort({ createdAt: -1 })

    const formattedPosts = posts.map((post) => ({
      _id: post._id.toString(),
      title: post.title,
      desc: post.desc,
      author: post.author.name,
      image: post.image?.toString('base64') || '', 
    }))

    return NextResponse.json(formattedPosts)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Failed to fetch posts' }, { status: 500 })
  }
}
