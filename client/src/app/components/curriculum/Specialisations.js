import { useCallback } from "react";
import { Form, FormGroup, Button } from 'reactstrap';

// returns unique specs to filter the courses on
const SpecialisationsFilter = ({ specialisations, onFilterSpecialisationChange, filterSpecialisation }) => {
  // function to handle changes to filter role which calls back to onFilterSpecialisationChange() from the <Education/>
  const handleFilterSpecialisationOnChange = useCallback((ev) => {
    if(typeof onFilterSpecialisationChange === 'function') {
      onFilterSpecialisationChange(ev.target.value)
    }
  }, [onFilterSpecialisationChange])
// return the filter buttons for all specialisations
  return (
    <Form>
      <FormGroup>
        {specialisations.map((s) => {
          return <Button onClick={handleFilterSpecialisationOnChange} value={s} key={s} active={filterSpecialisation === s}>{s}</Button>
        })}
      </FormGroup>
    </Form>
  )
};

export default SpecialisationsFilter;