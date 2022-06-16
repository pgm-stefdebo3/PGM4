import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SearchResults } from "../components";

// get a single blog by id query
const GET_SEARCH_DATA = gql`
query GetSearchData {
  blogs {
    id
    name
    description
  }
  members {
    id
    userName
    portfolio {
      firstName
      lastName
    }
  }
  posts {
    id
    title
  }
}
`

const SearchPage = () => {
  const { loading, error, data } = useQuery(GET_SEARCH_DATA)   

  
  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
      <>
        <SearchResults data={data}/>
      </>
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

export default  SearchPage;