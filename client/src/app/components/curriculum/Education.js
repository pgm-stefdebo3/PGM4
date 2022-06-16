import { useEffect, useState } from "react";
import SpecialisationsFilter from "./Specialisations";
import EducationTable from "./EducationTable";

const Education = ({education}) => {

  // get all learnLines and make a array of the uniques

  const learnLines = education.courses.map((education) => {
    return education.learnLine
  })
  const uniqueLearnLines = [...new Set(learnLines)];

  // get all specialisations and make a array of the uniques

  const specialisations = education.courses.map((education) => {
    return education.specialisation
  })
  const uniqueSpecs = [...new Set(specialisations.filter((spec) => spec !== null))].map(s => s.name);

  // define states to filter on specialisation and store filtered courses

  const [filterSpecialisation, setFilterSpecialisation] = useState(uniqueSpecs[0]);
  const [filteredCourses, setFilteredCourses] = useState('');
  

  // Filter courses by specialisation on mount, mounts every time courses or filterSpecialisation changes
  useEffect(() => {
    let c = education.courses.filter((c) => c.specialisation === null || c.specialisation.name === filterSpecialisation );
    setFilteredCourses(c)
  }, [education.courses, filterSpecialisation]);

  // function to handle filter specialisation changes
  const handleOnFilterSpecialisationChange = (v) => {
    setFilterSpecialisation(v);
  };

  // return education name, academy years and unique learnLines 
  // return all unique specs to filter on
  // return current courses
return (
  <div className="education" key={education.id}>
    <h2>{education.name}</h2>
    <SpecialisationsFilter specialisations={uniqueSpecs} onFilterSpecialisationChange={handleOnFilterSpecialisationChange} filterSpecialisation={filterSpecialisation}/>
    <EducationTable courses={filteredCourses} learnLines={uniqueLearnLines} schoolYear={education.schoolYear}/>
    <ul className="leanLineList">
      {uniqueLearnLines.map((l) => {
        return <li className="learnLine" style={{ color: l.color.hex}} key={l.id}>{l.name} ({l.code})</li>
      })}
    </ul>
  </div>
)
};

export default Education;