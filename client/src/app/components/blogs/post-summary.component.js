import { NavLink } from "react-router-dom";

// returns a single post without details, with NavLink to detailPage
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