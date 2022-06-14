const mutationCreateCourse = (condition) => { if ( condition ) { return `
mutation CreateCourseMutation($title: String!, $period: Int!, $credit: Int!, $weekTime: Int!, $specialisationId: ID!, $learnLineId: ID!, $educationId: ID!) {
  __typename
  createCourse(
    data: {title: $title, period: $period, credit: $credit, weekTime: $weekTime, specialisation: {connect: {id: $specialisationId}}, learnLine: {connect: {id: $learnLineId}}, education: {connect: {id: $educationId}}}
  ) {
    id
    title
    period
    credit
    weekTime
    specialisation {
      id
      name
    }
    learnLine {
      id
      name
    }
    education {
      id
      name
    }
  }
}`} else {
  return `
  mutation CreateCourseMutation($title: String!, $period: Int!, $credit: Int!, $weekTime: Int!, $learnLineId: ID!, $educationId: ID!) {
    __typename
    createCourse(
      data: {title: $title, period: $period, credit: $credit, weekTime: $weekTime, learnLine: {connect: {id: $learnLineId}}, education: {connect: {id: $educationId}}}
    ) {
      id
      title
      period
      credit
      weekTime
      learnLine {
        id
        name
      }
      education {
        id
        name
      }
    }
  }`
}

};

export default mutationCreateCourse;