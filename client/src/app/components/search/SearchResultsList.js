import { ListGroup } from "reactstrap";
import Member from "./Member";
import Blog from "./Blog";
import Post from "./Post";

const SearchResultsList = ({data}) => {

// returns conditional rendering, (if there are members, blogs or posts return the header and the items.)
// calls to <Member/>, <Blog/> and <Post/>
  return (
    <>
      { data.members.length > 0 ?
        <div className="card members-list">
        <div className="card-header">
          members
        </div>
        <ListGroup>
          {data.members.map(member => <Member key={member.id} member={member}/>)}
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
          {data.blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
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
          {data.posts.map(post => <Post key={post.id} post={post}/>)}
        </ListGroup>
      </div> 
      :
      <> </>
      }
    </>
  );
};

export default SearchResultsList;