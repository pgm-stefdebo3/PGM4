import { gql, useQuery } from "@apollo/client";
import { HomepageComponent } from "../components";

// get a single blog by id query
const GET_HOMEPAGE_DATA = gql`
query GetHomepageData {
  members(last: 5) {
    id
    portfolio {
      firstName
      lastName
    }
  }
  blogs(last: 2) {
    id
    name
    posts(last: 3) {
      id
      title
    }
  }
  services(last: 2) {
    name
    description
  }
}
`

const HomePage = () => {

  

  // use query to get the homepage data
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA)


  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
      <HomepageComponent data={data}/>
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

export default HomePage;