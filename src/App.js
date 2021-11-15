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

  return (
    <Main>
      <UserForm />
      <Output users={users} />
    </Main>
  );
};

export default App;
