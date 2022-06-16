import { ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Post = ({post}) => {
  return (
    <ListGroupItem key={ post.id }>
      <NavLink to={`/posts/${post.id}`} end><h4>{ post.title }</h4></NavLink>
    </ListGroupItem>
  )
};

export default Post;