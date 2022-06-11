const mutationCreatePortfolio = `
mutation CreatePortfolioMutation($firstname: String!, $lastname: String!, $imageUrl: String!, $about: RichTextAST!) {
  __typename
    createPortfolio(data: {firstName: $firstname, lastName: $lastname, imageUrl: $imageUrl, about: $about}) {
      id
      firstName
      lastName
      imageUrl
      about {
        markdown
      }
    }
}`;

export default mutationCreatePortfolio;