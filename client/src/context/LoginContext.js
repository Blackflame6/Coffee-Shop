import { useState, createContext } from "react";
import axios from 'axios'

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [logInIcon, setLoginInIcon] = useState(false);

  const [newUser, setNewUser] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPwd, setNewPwd] = useState("")





  const toggleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3500/users/login', { loginName, loginPassword })
      // const response = await axios.post('https://dreamcomebrewserver.onrender.com/users/login', { loginName, loginPassword })

      const result = response.data
      setLoginName("");
      setLoginPassword("");
      setLoginInIcon(result);
    } catch (error) {
      console.error(error.message)
    }


  };

  const logOut = (e) => {
    e.preventDefault();
    setLoginInIcon(false);
  };

  const logIn = (e) => {
    setLoginName(e.target.value);
  };

  const handlePassword = (e) => {
    setLoginPassword(e.target.value);
  };


  const handleUserName = (e) => {
    setNewUser(e.target.value)
  }

  const handleEmail = (e) => {
    setNewEmail(e.target.value)
  }

  const handleNewPwd = (e) => {
    setNewPwd(e.target.value)
  }


  const handleCreateNewUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/users', { newUser, newEmail, newPwd })
      const result = response.data
      console.log(result)
      setNewEmail("")
      setNewPwd("")
      setNewUser("")

    } catch (error) {
      console.error(error.message)
    }

  };


  return (
    <LoginContext.Provider
      value={{
        logInIcon,
        toggleLogin,
        handleCreateNewUser,
        handlePassword,
        logIn,
        logOut,
        loginName,
        loginPassword,
        handleEmail,
        handleNewPwd,
        handleUserName,
        newUser,
        newPwd,
        newEmail
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;