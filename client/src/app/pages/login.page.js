import { LoginForm } from "../components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";

const LoginPage = () => {
  const Auth = useContext(AuthContext)
  
  // set states for filter, role and members
  const [loginBody, setLoginBody] = useState({userName: '', password: ''});

  // function to handle filter text changes
  const handleOnUserNameChange = (v) => {
    setLoginBody({...loginBody, username: v});
  };

  // function to handle filter role changes
  const handleOnPasswordChange = (v) => {
    setLoginBody({...loginBody, password: v});
  };

  const handleOnButtonClick = async () => {
      await Auth.signInWithEmailAndPassword(loginBody.userName, loginBody.password);
  }

  // return searchbar with filterText and filterRole, also link functions with each other
  // return MembersList with filtered members
return (
  <div className="team__list">
    <LoginForm password={loginBody.password} email={loginBody.email} onUserNameChange={handleOnUserNameChange} onPasswordChange={handleOnPasswordChange} handleOnButtonClick={handleOnButtonClick}/>
  </div>
)
};

export default LoginPage;