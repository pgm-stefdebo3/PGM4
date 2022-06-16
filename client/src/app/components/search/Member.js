import { ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

// basic <ListGroupItem/> with member his avatar, email and role
const Member = ({member}) => {
    return (
          <ListGroupItem key={ member.id }>
            <NavLink to={`/portfolios/${member.id}`} end><h2>{ member.userName }</h2></NavLink>
            <p>{ `${member.portfolio.firstName} ${member.portfolio.lastName}` }</p>
          </ListGroupItem>
    )
  };

  export default Member