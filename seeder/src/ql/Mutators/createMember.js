const mutationCreateMember = `
mutation CreateMemberMutation($email: String!, $password: String!, $role: Role!, $portfolioId: ID!) {
  __typename
  createMember(data: { email: $email, password: $password, role: $role, portfolio: {connect: {id: $portfolioId}}}) {
      id
      email
      password
      role
    }
}`;

export default mutationCreateMember;