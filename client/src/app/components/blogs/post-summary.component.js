import { NavLink } from "react-router-dom";

const PostSummaryComponent = ({post}) => {
  return (
    <div className="post-summary">
      <NavLink to={`/posts/${post.id}`} end>
        <p>{post.title}</p>
      </NavLink>      
    </div>
  )
};

export default PostSummaryComponent;