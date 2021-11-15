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

  const removeUserHandler = (userId) => {};

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
        onRemoveUser={removeUserHandler}
        onFormSubmit={formSubmitHandler}
      />
      <Output users={users} />
    </Main>
  );
};

export default App;
