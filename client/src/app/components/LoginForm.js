import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useCallback } from "react";

const LoginForm = ({email, password, onUserNameChange , onPasswordChange, handleOnButtonClick}) => {
  

  // function to handle changes to filter text which calls back to onFilterTextChange() from the <FilteredTeamList/>
  const handleUserNameOnChange = useCallback((ev) => {
    if(typeof onEmailChange === 'function') {
      onUserNameChange(ev.target.value);
    }
  }, [onUserNameChange]);
  // function to handle changes to filter role which calls back to onFilterRoleChange() from the <FilteredTeamList/>
  const handlePasswordOnChange = useCallback((ev) => {
    if(typeof onPasswordChange === 'function') {
      onPasswordChange(ev.target.value)
    }
  }, [onPasswordChange])
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="txtEmail">UserName</Label>
        <Input type="text" name="userNameField" value={email} onChange={handleUserNameOnChange}/>
        <Label htmlFor="txtEmail">Password</Label>
        <Input type="password" name="passwordField" value={password} onChange={handlePasswordOnChange}/>
        <Button onClick={handleOnButtonClick}>Log In</Button>
      </FormGroup>
    </Form>
  );
};

export default LoginForm;