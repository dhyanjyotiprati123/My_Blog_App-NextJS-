import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import { Post, User } from '@/lib/models'

export async function GET(req, { params }) {
  try {
    await dbConnect();

    const { id } =await params;

    const post = await Post.findById(id).populate('author', 'name')

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 })
    }

    const formattedPost = {
      _id: post._id.toString(),
      title: post.title,
      desc: post.desc,
      author: post.author?.name || 'Unknown',
      image: post.image?.toString('base64') || '',
    }

    return NextResponse.json(formattedPost)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Error fetching post' }, { status: 500 })
  }
}
