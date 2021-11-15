import { useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import Output from "./components/Output";
import UserForm from "./components/UserForm";

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
    setUsers((prevState) => {
      return [...prevState, { ...newUser, id: uniqid() }];
    });
    setNewUser({ name: "", age: "" });
  };

  return (
    <Main>
      <UserForm
        user={newUser}
        onUpdateUser={updateNewUserHandler}
        onFormSubmit={formSubmitHandler}
      />
      <Output users={users} onRemoveUser={removeUserHandler} />
    </Main>
  );
};

export default App;
