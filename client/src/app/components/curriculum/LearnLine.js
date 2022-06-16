
const LearnLine = ({ courses, color }) => {

  const styleContainer = { "background-color": color, "width": "12rem", "height": "5rem", "position": "relative"}
  const styleEmptyContainer = { "background-color": color, "width": "12rem", "height": "5rem", "opacity": "0.6" }
  const styleDetails = {"width": "12rem", "padding-left": "1rem", "padding-right": "1rem", "display": "flex", "justify-content": "space-between", "position": "absolute", "bottom": "-0.8rem"}
  const styleTitle = { "padding-top": "1.6rem" }

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
        return <td colSpan={1}><div className="emptyCourse" style={styleEmptyContainer}></div></td>
      } else {
        return <td colSpan={1}><div className="course" style={styleContainer}>
          <p className="course__title" style={styleTitle}>{c.title}</p>
          <div className="detail__contatiner" style={styleDetails}>
          <p>{c.weekTime}h/w</p>
          <p>{c.credit}sp</p>
          </div>
        </div></td>
      }
    })}
    </tr>
  )
  };
  
  export default LearnLine;