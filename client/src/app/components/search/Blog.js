import { ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Blog = ({blog}) => {
  return (
    <ListGroupItem key={ blog.id }>
      <NavLink to={`/blogs/${blog.id}`} end><h2>{ blog.name }</h2></NavLink>
        <p>{ blog.description }</p>
    </ListGroupItem>
  )
};

export default Blog;