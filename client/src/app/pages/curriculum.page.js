import {
  gql,
  useQuery,
} from "@apollo/client";
import { Spinner } from 'reactstrap';

// Custom components

// GraphQL queries
const CURRICULUMS = gql`
query GetCurriculum {
  curriculum {
    id
    title
    code
    schoolYear
    periodAmount
  }
}
`;

const CurriculumPage = () => {
  const { loading, error, data } = useQuery(CURRICULUMS);

  const gqlResult = () => {
    if (loading) return <Spinner
      color="primary"
      size=""
      type="grow"
    >
      Loading...
    </Spinner>;
    if (error) return <p>Error :(</p>;

    return (
      <p> yo </p>
    );
  };

  return (
    <>
      yo
    </>
  )
};

export default CurriculumPage;