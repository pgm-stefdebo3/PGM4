import { ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

// basic <ListGroupItem/> with member his avatar, email and role
const Member = ({member}) => {
    return (
          <ListGroupItem key={ member.id }>
            <img src={member.portfolio.imageUrl} loading="lazy" style={{filter: "invert(100%) hue-rotate(180deg)"}} alt={member.email + " avatar"}/>
            <NavLink to={`/portfolios/${member.id}`} end><h2>{ member.email }</h2></NavLink>
            <p className={`member--${member.role}`}>{ member.role }</p>
          </ListGroupItem>
    )
  };

  export default Member