const mutationCreateEducation = `
mutation CreateEducationMutation($name: String!, $code: String!, $schoolYear: Int!, $description: String!) {
  __typename
  createEducation(data: {name: $name, code: $code, schoolYear: $schoolYear, description: $description}) {
    id
    name
    code
    description
  }
}`;

export default mutationCreateEducation;