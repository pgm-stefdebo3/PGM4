const mutationCreateMember = `
mutation CreateMemberMutation($email: String!, $userName: String!, $password: String!, $role: Role!, $portfolioId: ID!) {
  __typename
  createMember(data: { email: $email, userName: $userName password: $password, role: $role, portfolio: {connect: {id: $portfolioId}}}) {
      id
      email
      userName
      password
      role
    }
}`;

export default mutationCreateMember;