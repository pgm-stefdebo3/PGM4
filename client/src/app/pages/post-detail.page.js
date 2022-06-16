import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { PostDetailsComponent } from "../components";

// get a single blog by id query
const GET_A_POST = gql`
query GetAPost( $id: ID! ) {
  post(where: {id: $id}) {
    id
    title
    body {
      html
    }
    member {
      portfolio {
        id
        firstName
        lastName
      }
    }
    blog {
      id
      name
    }
  }
}
`

const PostDetailsPage = () => {
  // get id out of url parameters
  const { postId } = useParams();

  // use query to get the right post
  const { loading, error, data } = useQuery(GET_A_POST, {
    variables: {
      id: postId
    }
  })

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
      <PostDetailsComponent post={data.post}/>
    )
  }

  return (
    <div className="container-md">
      {
        gqlResultAsJSX()
      }
    </div>
  )
};

export default  PostDetailsPage;