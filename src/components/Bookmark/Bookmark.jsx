
import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className="bg-slate-200 p-2 rounded-md mt-3 text-center">
            <h3 className="text-3xl font-bold"> Title : {title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes
}
export default Bookmark;