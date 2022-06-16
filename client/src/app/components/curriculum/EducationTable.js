import { Table } from "reactstrap";
import LearnLine from "./LearnLine";
const EducationTable = ({ courses, learnLines, schoolYear }) => {

  const coursesClone = [...courses]
  
// returns hardcoded tableHeader(except for schoolYears), with in the tableBody a map function which maps learnLines to reference <LearnLine/>
return (
  <div className="education__table" style={{ textAlign: "center", fontWeight: "bold"}}>
    <Table>
    <thead>
      <tr>
        <th colSpan={4}>
          <p>{`${schoolYear}-${schoolYear + 1}`}</p>
        </th>
        <th colSpan={4}>
          <p>{`${schoolYear + 1}-${schoolYear + 2}`}</p>
        </th>
      </tr>
      <tr >
        <th colSpan={4}>
          <p>Jaar 1</p>
        </th>
        <th  colSpan={4}>
          <p>Jaar 2</p>
        </th>
      </tr>
      <tr>
        <th colSpan={2}>
          <p>Semester 1</p>
        </th>
        <th colSpan={2}>
          <p>Semester 2</p>
        </th>
        <th colSpan={2}>
          <p>Semester 3</p>
        </th>
        <th colSpan={2}>
          <p>Semester 4</p>
        </th>
      </tr>
      <tr >
        <th colSpan={1}>
          Periode 1
        </th>
        <th colSpan={1}>
          Periode 2
        </th>
        <th colSpan={1}>
          Periode 3
        </th>
        <th colSpan={1}>
          Periode 4
        </th>
        <th colSpan={1}>
          Periode 5
        </th>
        <th colSpan={1}>
          Periode 6
        </th>
        <th colSpan={1}>
          Periode 7
        </th>
        <th colSpan={1}>
          Periode 8
        </th>
      </tr>
    </thead>
    <tbody>
      {
        learnLines.map((l) => {
          return <LearnLine courses={coursesClone.filter(c => c.learnLine.name === l.name)} key={l.id} color={l.color.hex}/>
      })
      }
    </tbody>
    </Table>
  </div>
)
};

export default EducationTable;