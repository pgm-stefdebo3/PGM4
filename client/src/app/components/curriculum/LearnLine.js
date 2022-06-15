
const LearnLine = ({ courses, color }) => {

  const style = { "background-color": color}

  let coursesByLearnLine = courses
  for ( let i = 1; i < 9; i += 1) {
    const courseByPeriod = courses.filter((c) => c.period === i)
    if (courseByPeriod.length === 0) {
      coursesByLearnLine.push({
        period: i,
        id: -1,
      })
    }
  }
  coursesByLearnLine.sort(function(a, b){return a.period-b.period})
  console.log(coursesByLearnLine);


  return (
    <tr>
    {coursesByLearnLine.map((c) => {
      if (c.id === -1) {
        return <td><div className="emptyCourse" style={style}></div></td>
      } else {
        return <td><div className="course" style={style}>
          <p>{c.title}</p>
        </div></td>
      }
    })}
    </tr>
  )
  };
  
  export default LearnLine;