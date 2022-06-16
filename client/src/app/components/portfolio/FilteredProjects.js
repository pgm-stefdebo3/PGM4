
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const FilteredProjects = ({projects}) => {

  return (
  <>
    {projects.map((p) => {
    return <Card>
      <CardImg alt={p.name} src={p.imageUrl} />
      <CardBody>
        <CardTitle tag="h4">
          {p.title}
        </CardTitle>
        <CardText>
          {p.description}
        </CardText>
      </CardBody>
    </Card>
    })}
  </>
  )
};

export default FilteredProjects;