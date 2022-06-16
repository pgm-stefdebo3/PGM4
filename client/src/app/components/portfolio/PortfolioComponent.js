import { CardGroup } from "reactstrap";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import FilteredProjects from "./FilteredProjects";

const PortfolioComponent = ({member}) => {
  const [filterText, setFilterText] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(member.projects);
  

  // Filter members by name and role on mount, mounts every time members, filterText or filterRole changes
  useEffect(() => {
    let p = member.projects.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()) || p.description.toLowerCase().includes(filterText.toLowerCase()))
    console.log(p);
    console.log(filterText);
    setFilteredProjects(p)
  }, [member , filterText]);

  // function to handle filter text changes
  const handleOnFilterTextChange = (v) => {
    setFilterText(v);
  };

  return (
    <div className="container-md">
      <h2>Hi i am {`${member.portfolio.firstName} ${member.portfolio.lastName}`}</h2>
      <img src={member.portfolio.imageUrl} alt={`${member.portfolio.firstName} portfolio`}/>
      <div className="" dangerouslySetInnerHTML={{ __html: member.portfolio.about.html }}/>
      <h3>Contact me at {member.email}</h3>
      <h3>Projects:</h3>
      <SearchBar filterText={filterText} onFilterTextChange={handleOnFilterTextChange}/>
      <CardGroup>
        <FilteredProjects projects={filteredProjects}/>
      </CardGroup>
    </div>
  );
};

export default PortfolioComponent;