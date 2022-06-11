import { gql, useQuery } from "@apollo/client";

import { ListGroup, ListGroupItem } from 'reactstrap';
import PostsListComponent from "./posts-list.component";

const GET_ALL_BLOGS = gql`
query GetAllBlogs {
  blogs {
    id
    name
    description
    createdAt
    posts {
      title
    }
  }
}
`;

const BlogsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
      <div className="card blogs-list">
        <div className="card-header">
          Blogs
        </div>
        <ListGroup>
        {data && data.blogs && data.blogs.map(blog => 
          <ListGroupItem key={ blog.id }>
            <h2>{ blog.name }</h2>
            <p>{ blog.description }</p>
            <PostsListComponent posts={blog.posts}/>
          </ListGroupItem>
        )}
        </ListGroup>
      </div>
    )
  };

  return (
    <>
      {
        gqlResultAsJSX()
      }
    </>
  )
};

export default BlogsList;