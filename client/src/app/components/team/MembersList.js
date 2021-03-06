import { ListGroup } from 'reactstrap';
import Member from "./Member";

const MembersList = ({filteredMembers}) => {
  // return basic members list structure with a map function which locates all <Member/> components in the <ListGroup/>
  return (
    <div className="card members-list">
      <div className="card-header">
        members
      </div>
      <ListGroup>
      {filteredMembers.map(member => <Member key={member.id} member={member}/>)}
      </ListGroup>
    </div>
  )
};

export default MembersList;