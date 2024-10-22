import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className=" w-2/3">
            <h3 className="text-2xl font-bold">Blogs : {blogs.length}</h3>
            {
                blogs.map(blog=><Blog
                     key={blog.id}
                     handleAddToBookmark={handleAddToBookmark} 
                     blog={blog}></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark:PropTypes
}
export default Blogs;