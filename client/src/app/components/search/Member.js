import { ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

// basic <ListGroupItem/> with member his userName, name and NavLink
const Member = ({member}) => {
    return (
          <ListGroupItem key={ member.id }>
            <NavLink to={`/portfolios/${member.id}`} end><h4>{ member.userName }</h4></NavLink>
            <p>{ `${member.portfolio.firstName} ${member.portfolio.lastName}` }</p>
          </ListGroupItem>
    )
  };

  export default Member