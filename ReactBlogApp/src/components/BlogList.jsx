import React from 'react'
import BlogItem from './BlogItem'
import { useSelector } from 'react-redux'

function BlogList() {
    
    let blogs = useSelector(state=>state);

    return (
        <div className="mt-4">
            {blogs.map((blog)=>   {
                return <BlogItem count key={blogs.id} blog={blog}/>;
            })}
        </div>
    )
}

export default BlogList
