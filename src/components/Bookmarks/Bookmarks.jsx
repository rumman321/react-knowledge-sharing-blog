
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {

    return (
        <div className="w-1/3 bg-gray-400 text-center rounded-sm mt-10 p-2">
            <p>MarkAsRead: {bookmarks.length} </p>
            {/* nice j vabe kora hoice caile aivabeu kora jay map use kore title dehaite pri */}
            {/* {
                bookmarks.map((book)=>{
                    return(
                        <p>{book.title}</p>
                    )
                })
            } */}
            {
                bookmarks.map((bookmark)=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes
}
export default Bookmarks;