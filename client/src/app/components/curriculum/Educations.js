import Education from "./Education";
const Educations = ({educations}) => {
  const data = educations.educations

  // map over educations and returns each education with <Education/>
return (
  <div className="team__list">
    {data.map((e) => {
      return <Education education={e} key={e.id}/>
    })}
  </div>
)
};

export default Educations;