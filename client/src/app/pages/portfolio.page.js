import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PortfolioComponent } from "../components";

// get a single blog by id query
const GET_A_BLOG = gql`
query GetPortfolioData( $id: ID! ) {
  member(where: {id: $id}) {
    email
    portfolio {
      firstName
      lastName
      imageUrl
      about {
        html
      }
    }
    projects {
      name
      description
      imageUrl
    }
  }
}
`

const PortfolioPage = () => {
  // get id out of url parameters
  const { memberId } = useParams();

  // use query to get the right member
  const { loading, error, data } = useQuery(GET_A_BLOG, {
    variables: {
      id: memberId
    }
  })

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
      <PortfolioComponent member={data.member}/>
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

export default  PortfolioPage;