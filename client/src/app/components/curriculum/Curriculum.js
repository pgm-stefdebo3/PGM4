import { gql, useQuery } from "@apollo/client";
import Educations from "./Educations";

// Education query
const GET_ALL_EDUCATIONS= gql`
query GetAllEducations {
  educations {
    id
    name
    schoolYear
    courses {
      id
      title
      period
      weekTime
      credit
      learnLine {
        id
        name
        code
        color {
          hex
        }
      }
      specialisation {
        id
        name
      }
    }
  }
}
`;

const Curriculum = () => {
// Use getMember query to fetch members
  const { loading, error, data } = useQuery(GET_ALL_EDUCATIONS);
  // return gql result with appropriate loading, error and result
  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    console.log(data);
    return (
      <Educations educations={data}/>
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

export default Curriculum;