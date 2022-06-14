import PostsListComponent from "./posts-list.component";

const BlogDetailsComponent = ({blog}) => {
  console.log(blog);
  return (
    <div className="post-details">
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <PostsListComponent posts={blog.posts}/>
    </div>
  )
};

export default BlogDetailsComponent;