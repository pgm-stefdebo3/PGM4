const mutationCreateSpecialisation = `
mutation CreateSpecialisationMutation($name: String!) {
  __typename
  createSpecialisation(data: {name: $name}) {
    id
    name
  }
}`;

export default mutationCreateSpecialisation;