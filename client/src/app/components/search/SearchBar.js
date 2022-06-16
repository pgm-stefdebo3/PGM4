import { Form, FormGroup, Label, Input } from "reactstrap";
import { useCallback } from "react";

const SearchBar = ({ onFilterTextChange, filterText}) => {

  // function to handle changes to filter text which calls back to onFilterTextChange() from the <FilteredTeamList/>
  const handleFilterTextOnChange = useCallback((ev) => {
    if(typeof onFilterTextChange === 'function') {
      onFilterTextChange(ev.target.value);
    }
  }, [onFilterTextChange]);

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="txtFilterText">Search</Label>
        <Input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextOnChange}/>
      </FormGroup>
    </Form>
  );
};

export default SearchBar;