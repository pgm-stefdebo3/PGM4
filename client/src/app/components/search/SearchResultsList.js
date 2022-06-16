import { ListGroup } from "reactstrap";
import Member from "./Member";
import Blog from "./Blog";
import Post from "./Post";

const SearchResultsList = ({data}) => {


  return (
    <>
      { data.members.length > 0 ?
        <div className="card members-list">
        <div className="card-header">
          members
        </div>
        <ListGroup>
          {data.members.map(member => <Member member={member}/>)}
        </ListGroup>
      </div> 
      :
      <> </>
      }
      {
        data.blogs.length > 0 ?
        <div className="card blogs-list">
        <div className="card-header">
          Blogs
        </div>
        <ListGroup>
          {data.blogs.map(blog => <Blog blog={blog}/>)}
        </ListGroup>
      </div> 
      :
      <> </>
      }
      {
        data.posts.length > 0 ?
        <div className="card posts-list">
        <div className="card-header">
          Posts
        </div>
        <ListGroup>
          {data.posts.map(post => <Post post={post}/>)}
        </ListGroup>
      </div> 
      :
      <> </>
      }
    </>
  );
};

export default SearchResultsList;