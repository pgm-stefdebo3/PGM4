import LearnLine from "./LearnLine";
const EducationTable = ({ courses, learnLines }) => {

  const coursesClone = [...courses]
  
return (
  <div className="education__table">
    <thead>
      <tr>
        <th className=".col-md-8">
          <p>2021–2022</p>
        </th>
      </tr>
      <tr >
        <th className=".col-md-4">
          <p>Jaar 1</p>
        </th>
        <th className=".col-md-4">
          <p>Jaar 2</p>
        </th>
      </tr>
      <tr>
        <th className=".col-md-2">
          <p>Semester 1</p>
        </th>
        <th className=".col-md-2">
          <p>Semester 2</p>
        </th>
        <th className=".col-md-2">
          <p>Semester 3</p>
        </th>
        <th className=".col-md-2">
          <p>Semester 4</p>
        </th>
      </tr>
      <tr >
        <th className=".col-md-1">
          Periode 1
        </th>
        <th className=".col-md-1">
          Periode 2
        </th>
        <th className=".col-md-1">
          Periode 3
        </th>
        <th className=".col-md-1">
          Periode 4
        </th>
        <th className=".col-md-1">
          Periode 5
        </th>
        <th className=".col-md-1">
          Periode 6
        </th>
        <th className=".col-md-1">
          Periode 7
        </th>
        <th className=".col-md-1">
          Periode 8
        </th>
      </tr>
    </thead>
    <tbody>
      {
        learnLines.map((l) => {
          return <LearnLine courses={coursesClone.filter(c => c.learnLine.name === l.name)} color={l.color.hex}/>
      })
      }
    </tbody>
  </div>
)
};

export default EducationTable;