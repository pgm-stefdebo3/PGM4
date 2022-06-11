const queryGetMembers = `
query GetMembers {
  members {
    id
    email
    portfolio{
      firstName
      lastName
    }
  }
}`;

export default queryGetMembers;