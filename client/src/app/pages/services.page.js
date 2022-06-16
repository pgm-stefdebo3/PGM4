import { gql, useQuery } from "@apollo/client";
import { ServicesComponent } from "../components";

// Education query
const GET_ALL_SERVICES= gql`
query GetAllServices {
  services {
    id
    name
    description
  }
}
`;

const ServicesPage = () => {
// Use getMember query to fetch members
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);
  // return gql result with appropriate loading, error and result
  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
      <ServicesComponent services={data.services}/>
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

export default ServicesPage;