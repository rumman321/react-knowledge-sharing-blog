
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    const {id,title,cover,hashtags,posted_date,author,author_img,reading_time}=blog
    return (
        <div className='p-3'>
            <img className='rounded-lg' src={cover} alt="" />
            {/* content */}
           <div className='p-3 space-x-2'>
           <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <img className='w-[50px] rounded-[50%]' src={author_img} alt="" />
                    <div className=' '>
                        <h4 className='font-bold '>{author}</h4>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <p><small>{reading_time} min read</small></p>
                </div>
            </div>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <p><small>{hashtags}</small></p>
           </div>

        </div>
    );
};
Blog.propTypes={
    blog:PropTypes
}
export default Blog;