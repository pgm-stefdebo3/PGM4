import { useCallback } from "react";

import { Form, FormGroup, Input, Label } from 'reactstrap';

const SearchBar = ({filterText, onFilterTextChange}) => {

  // function to handle changes to filter text which calls back to onFilterTextChange() from the <PortfolioComponent/>
  const handleFilterTextOnChange = useCallback((ev) => {
    if(typeof onFilterTextChange === 'function') {
      onFilterTextChange(ev.target.value);
    }
  }, [onFilterTextChange]);
// return a <Form/> with a <FormGroup/> component for the SearchBar
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="txtFilterText">Search</Label>
        <Input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextOnChange}/>
      </FormGroup>
    </Form>
  )
};

export default SearchBar;