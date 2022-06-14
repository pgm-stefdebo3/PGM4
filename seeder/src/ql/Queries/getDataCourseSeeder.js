const queryGetDataCourseSeeder = `
query MyQuery {
  educations {
    id
  }
  learnLines {
    id
    name
  }
  specialisations {
    id
    name
  }
}
`;

export default queryGetDataCourseSeeder;