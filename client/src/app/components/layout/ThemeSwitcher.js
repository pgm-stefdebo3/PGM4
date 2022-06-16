import { useCallback } from "react";
import { Form, FormGroup, Input } from "reactstrap";

const ThemeSwitcher = ({ onDarkmodeChange, isDarkMode}) => {
  console.log(isDarkMode);

  // function to handle changes to filter text which calls back to onFilterTextChange() from the <FilteredTeamList/>
  const handleisDarkModeOnChange = useCallback((ev) => {
    if(typeof onDarkmodeChange === 'function') {
      onDarkmodeChange();
    }
  }, [onDarkmodeChange]);

  return (
    <Form>
      <FormGroup>
        <label class="switch">
          <Input type="checkbox" checked={isDarkMode} onChange={handleisDarkModeOnChange}/>
          <span class="slider round"></span>
        </label>
      </FormGroup>
    </Form>
  );
};

export default ThemeSwitcher;