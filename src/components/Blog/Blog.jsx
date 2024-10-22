
import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmark}) => {
    console.log(blog)
    const {id,title,cover,hashtags,posted_date,author,author_img,reading_time}=blog
    return (
        <div className='p-3'>
            <img className='rounded-lg' src={cover} alt="" />
            {/* content */}
           <div className='p-3 space-x-2'>
           <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <img className='w-14 rounded-[50%]' src={author_img} alt="" />
                    <div className=' '>
                        <h4 className='font-bold '>{author}</h4>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div className='flex items-center  gap-2'>
                    <p className=''><small>{reading_time} min read </small></p>
                    <span className='cursor-pointer' onClick={()=>handleAddToBookmark(blog)}><IoBookmarksOutline></IoBookmarksOutline></span>
                </div>
            </div>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <p><small>{hashtags}</small></p>
           </div>

        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object,
    handleAddToBookmark:PropTypes
}
export default Blog;