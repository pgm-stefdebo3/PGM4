import { NavLink } from "react-router-dom";
import PostsListComponent from "./posts-list.component";

// returns a detailed blog component consisting of the title, description and a link to go back to the blogs page
const BlogDetailsComponent = ({blog}) => {
  return (
    <div className="post-details">
      <NavLink to={`/blogs`} end><h2>{` < Return to Blogs`}</h2></NavLink>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <PostsListComponent posts={blog.posts}/>
    </div>
  )
};

export default BlogDetailsComponent;