import { useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import Output from "./components/Output";
import UserForm from "./components/UserForm";
import Error from "./components/Error";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  const [users, setUsers] = useState([
    { name: "Michael", age: 30, id: uniqid() },
    { name: "Izabella", age: 37, id: uniqid() },
  ]);

  const [newUser, setNewUser] = useState({ name: "", age: "" });

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const updateNewUserHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const removeUserHandler = (e) => {
    const userId = e.target.id;
    setUsers((prevState) => {
      return prevState.filter((user) => userId !== user.id);
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.age) {
      setErrorMsg("Field left blank.");
      setIsError(true);
      return;
    }
    if (Number(newUser.age) < 0) {
      setErrorMsg("Invalid age value");
      setIsError(true);
      return;
    }
    setUsers((prevState) => {
      return [...prevState, { ...newUser, id: uniqid() }];
    });
    setNewUser({ name: "", age: "" });
  };

  const clearErrorHandler = (e) => {
    console.log(e.target);
    setIsError(false);
  };

  return (
    <Main>
      <UserForm
        user={newUser}
        onUpdateUser={updateNewUserHandler}
        onFormSubmit={formSubmitHandler}
      />
      <Output users={users} onRemoveUser={removeUserHandler} />
      {isError ? (
        <Error onClear={clearErrorHandler} msg={errorMsg}></Error>
      ) : (
        ""
      )}
    </Main>
  );
};

export default App;
