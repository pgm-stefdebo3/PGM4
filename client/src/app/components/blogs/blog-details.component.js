import { NavLink } from "react-router-dom";
import PostsListComponent from "./posts-list.component";

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