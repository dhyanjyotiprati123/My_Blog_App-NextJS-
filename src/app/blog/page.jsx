"use client"

import React, {useState, useEffect} from 'react';


const page = () => {
   
  const [blogData, setBlogData] = useState({
      title:"",
      desc: "",
      image: "",
      author: ""
  });

  const [preview, setPreview] = useState(null)

  const handleChange = (e) =>{
     const {name, value} = e.target;
     setBlogData({...blogData, [name]: value})
  };

  const handleFile=(e) =>{
     const file = e.target.files[0];
     if(file){
        setBlogData({...blogData, image: file});
        setPreview(URL.createObjectURL(file))
     }
  };

 const handleClick = async (e) => {
  e.preventDefault();

  if (!blogData.title || !blogData.desc || !blogData.image) {
    alert("Please fill all fields and upload an image.");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("desc", blogData.desc);
    formData.append("image", blogData.image);

    const res = await fetch("/api/blog", {
      method: "POST",
      body: formData,
      credentials:"include"
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Post created:", data);
      alert("Blog post created successfully!");

      setBlogData({
        title: "",
        desc: "",
        image: "",
        author: "", 
      });
    } else {
      alert("Failed to create post: " + data.message);
    }
  } catch (err) {
    console.error("Error while submitting blog:", err);
    alert("Something went wrong.");
  }
};


  return (
    <div className='blog'>
        <div className="blog-wrapper">
            <div className="blog-left">
                <form className="blog-form">
                    <input type="text" className="blog-input" placeholder='Blog Title' name="title" value={blogData.title} onChange={handleChange} />
                    <input type="text" className="blog-input" placeholder='Blog Description' name="desc" value={blogData.desc} onChange={handleChange} />
                    <div className='blog-filebox'>
                       <>
                       <input type="file" id='file-upload' className="blog-file" name='image' onChange={handleFile} style={{ display: 'none' }} />
                       <label className='blog-label' htmlFor='file-upload'>
                         Upload Image
                       </label>
                       </>
                       <div className='blog-preview'>
                        <img
                            src={preview}
                            alt="Selected"
                            style={{ width: '300px',height:"400px", borderRadius: '8px', objectFit: 'cover' }}
                        />
                       </div>
                    </div>
                   
                    <button className='blog-btn' onClick={handleClick}>Create Blog</button>
                </form>
            </div>
            <div className="blog-right">
                <h1>Create Your Blog</h1>
                <div className='blog-pic'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default page;