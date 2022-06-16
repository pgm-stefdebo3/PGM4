import { ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Post = ({post}) => {
  return (
    <ListGroupItem key={ post.id }>
      <NavLink to={`/posts/${post.id}`} end><h2>{ post.title }</h2></NavLink>
    </ListGroupItem>
  )
};

export default Post;