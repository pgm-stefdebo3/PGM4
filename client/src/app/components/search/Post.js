import { ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

// basic <ListGroupItem/> with post its title and NavLink
const Post = ({post}) => {
  return (
    <ListGroupItem key={ post.id }>
      <NavLink to={`/posts/${post.id}`} end><h4>{ post.title }</h4></NavLink>
    </ListGroupItem>
  )
};

export default Post;