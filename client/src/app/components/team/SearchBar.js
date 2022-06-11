import { useCallback } from "react";

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const SearchBar = ({filterText, onFilterTextChange, filterRole , onFilterRoleChange}) => {

  // function to handle changes to filter text which calls back to onFilterTextChange() from the <FilteredTeamList/>
  const handleFilterTextOnChange = useCallback((ev) => {
    if(typeof onFilterTextChange === 'function') {
      onFilterTextChange(ev.target.value);
    }
  }, [onFilterTextChange]);
  // function to handle changes to filter role which calls back to onFilterRoleChange() from the <FilteredTeamList/>
  const handleFilterRoleOnChange = useCallback((ev) => {
    if(typeof onFilterRoleChange === 'function') {
      onFilterRoleChange(ev.target.value)
    }
  }, [onFilterRoleChange])
// return a <Form/> with 2 <FormGroup/> components for the SearchBar and Role Filter
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="txtFilterText">Search</Label>
        <Input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextOnChange}/>
      </FormGroup>
      <FormGroup>
        <Button onClick={handleFilterRoleOnChange} value={"Students"} active={filterRole === 'Students'}>Students</Button>
        <Button onClick={handleFilterRoleOnChange} value={"Teachers"} active={filterRole === 'Teachers'}>Teachers</Button>
        <Button onClick={handleFilterRoleOnChange} value={"All"} active={filterRole === 'All'}>All</Button>
      </FormGroup>
    </Form>
  )
};

export default SearchBar;