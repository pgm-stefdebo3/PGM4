import { NavLink } from "react-router-dom";

const PostDetailsComponent = ({post}) => {
  console.log(post);
  return (
    <div className="post-details">
      <NavLink to={`/blogs/${post.blog.id}`} end><h2> return to {post.blog.name}</h2></NavLink>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div className="" dangerouslySetInnerHTML={{ __html: post.body.html }}>
      </div>
    </div>
  )
};

export default PostDetailsComponent;