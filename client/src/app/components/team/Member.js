import { ListGroupItem } from "reactstrap";


// basic <ListGroupItem/> with member his avatar, email and role
const Member = ({member}) => {
    return (
          <ListGroupItem key={ member.id }>
            <img src={member.portfolio.imageUrl} loading="lazy" alt={member.email + " avatar"}/>
            <h2>{ member.email }</h2>
            <p>{ member.role }</p>
          </ListGroupItem>
    )
  };

  export default Member