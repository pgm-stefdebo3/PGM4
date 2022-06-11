const mutationCreateBlog = `
mutation CreateBlogMutation($name: String!, $description: String!) {
  __typename
  createBlog(
    data: {name: $name, description: $description}
  ) {
    id
    name
    description
  }
}`;

export default mutationCreateBlog;