import { gql, useQuery } from "@apollo/client";
import FilteredTeamList from "./FilteredTeamList";


// getMember query
const GET_ALL_MEMBERS = gql`
query GetAllMembers {
  members {
    id
    email
    password
    role
    portfolio {
      lastName
      firstName
      imageUrl
    }
  }
}
`;

const TeamList = () => {
// Use getMember query to fetch members
  const { loading, error, data } = useQuery(GET_ALL_MEMBERS);
  // return gql result with appropriate loading, error and result
  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    console.log(data.members);

    return (
      <FilteredTeamList member={data.members}/>
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

export default TeamList;