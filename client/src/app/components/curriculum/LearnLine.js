
const LearnLine = ({ courses, color }) => {

  // some css modules
  const styleContainer = { backgroundColor: color, width: "12rem", height: "5rem", position: "relative"}
  const styleEmptyContainer = { backgroundColor: color, width: "12rem", height: "5rem", opacity: "0.5" }
  const styleDetails = {width: "12rem", paddingLeft: "1rem", paddingRight: "1rem", display: "flex", justifyContent: "space-between", position: "absolute", bottom: "-0.8rem"}
  const styleTitle = { paddingTop: "1.6rem" }

  // create a new array consisting of courses ordered by learnLines, filling in the missing periods in the process
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


  // use coursesByLearnLine in a map function to conditionally render an empty or filled course in the fitting LearnLine, returning the fitting color and 
  // if it is a filled course the title, weekTime and credits
  return (
    <tr>
    {coursesByLearnLine.map((c) => {
      if (c.id === -1) {
        return <td colSpan={1} key={`${c.id}${c.period}`}><div className="emptyCourse" style={styleEmptyContainer}></div></td>
      } else {
        return <td colSpan={1} key={`${c.id}${c.period}`}><div className="course" style={styleContainer}>
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