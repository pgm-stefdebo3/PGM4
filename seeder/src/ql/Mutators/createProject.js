const mutationCreateProject = `
mutation CreateProjectMutation($name: String!, $imageUrl: String!, $description: String!, $memberId: ID!) {
  __typename
  createProject(
    data: {name: $name, imageUrl: $imageUrl, description: $description, member: {connect: {id: $memberId}}}
  ) {
    id
    name
  }
}`;

export default mutationCreateProject;