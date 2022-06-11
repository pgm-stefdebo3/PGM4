import { useEffect, useState } from "react";
import MembersList from "./MembersList";
import SearchBar from "./SearchBar";

const FilteredTeamList = (members) => {

  // set states for filter, role and members
  const [filterText, setFilterText] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [filteredMembers, setFilteredMembers] = useState(members.member);

  // Filter members by name and role on mount, mounts every time members, filterText or filterRole changes
  useEffect(() => {
    let m = members.member.filter(m => `${m.portfolio.firstName.toLowerCase()} ${m.portfolio.lastName.toLowerCase()}`.indexOf(filterText.toLowerCase()) > -1 || m.email.toLowerCase().indexOf(filterText.toLowerCase()) > -1 )
    if (filterRole === "Teachers") {
      m = m.filter(m => m.role === "Teacher")
    } else if (filterRole === "Students") {
      m = m.filter(m => m.role === "Student")
    }
    setFilteredMembers(m)
  }, [members , filterText, filterRole]);

  // function to handle filter text changes
  const handleOnFilterTextChange = (v) => {
    console.log(v);
    setFilterText(v);
    console.log(filterText)
  };

  // function to handle filter role changes
  const handleOnFilterRoleChange = (v) => {
    console.log(v);
    setFilterRole(v);
    console.log(filterRole)
  };


  // return searchbar with filterText and filterRole, also link functions with each other
  // return MembersList with filtered members
return (
  <div className="team__list">
    <SearchBar filterText={filterText} filterRole={filterRole} onFilterTextChange={handleOnFilterTextChange} onFilterRoleChange={handleOnFilterRoleChange}/>
    <MembersList filteredMembers={filteredMembers}/>
  </div>
)
};

export default FilteredTeamList;