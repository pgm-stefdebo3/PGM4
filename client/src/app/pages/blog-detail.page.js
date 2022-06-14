import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { BlogDetailsComponent } from "../components";

// get a single blog by id query
const GET_A_BLOG = gql`
query GetABlog( $id: ID! ) {
blog(where: {id: $id}) {
  id
  name
  description
  posts {
    id
    title
  }
}
}
`

const BlogDetailsPage = () => {
  // get id out of url parameters
  const { blogId } = useParams();

  // use query to get the right blog
  const { loading, error, data } = useQuery(GET_A_BLOG, {
    variables: {
      id: blogId
    }
  })

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
      <BlogDetailsComponent blog={data.blog}/>
    )
  }

  return (
    <>
      {
        gqlResultAsJSX()
      }
    </>
  )
};

export default  BlogDetailsPage;