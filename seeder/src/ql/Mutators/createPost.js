const mutationCreatePost = `
mutation CreatePostMutation($title: String!, $body: RichTextAST!, $memberId: ID!, $blog: BlogWhereUniqueInput!) {
  __typename
  createPost(data: {title: $title, body: $body, member: {connect: {id: $memberId}}, blog: {connect: $blog}}) {
    id
    title
    body {
      markdown
    }
    blog {
      id
      name
    }
    member {
      id
      email
      portfolio {
        firstName
        lastName
      }
    }
  }
}`;

export default mutationCreatePost;