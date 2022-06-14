import { useCallback } from "react";

import { Form, FormGroup, Button } from 'reactstrap';

const SpecialisationsFilter = ({ specialisations, onFilterSpecialisationChange, filterSpecialisation }) => {
  // function to handle changes to filter role which calls back to onFilterSpecialisationChange() from the <Education/>
  const handleFilterSpecialisationOnChange = useCallback((ev) => {
    if(typeof onFilterSpecialisationChange === 'function') {
      onFilterSpecialisationChange(ev.target.value)
    }
  }, [onFilterSpecialisationChange])
// return a <Form/> with 2 <FormGroup/> components for the SearchBar and Role Filter
  return (
    <Form>
      <FormGroup>
        {specialisations.map((s) => {
          return <Button onClick={handleFilterSpecialisationOnChange} value={s} active={filterSpecialisation === s}>{s}</Button>
        })}
      </FormGroup>
    </Form>
  )
};

export default SpecialisationsFilter;