const mutationCreateLearnLine = `
mutation CreateLearnLineMutation($name: String!, $code: String!, $color: ColorInput!) {
  __typename
  createLearnLine(data: {name: $name, code: $code, color: $color }) {
    id
    name
    code
    color {
      hex
    }
  }
}`;

export default mutationCreateLearnLine;