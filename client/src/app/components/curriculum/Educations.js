import Education from "./Education";
const Educations = ({educations}) => {
  const data = educations.educations
  console.log(data)

return (
  <div className="team__list">
    {data.map((e) => {
      return <Education education={e}/>
    })}
  </div>
)
};

export default Educations;