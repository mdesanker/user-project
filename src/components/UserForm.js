import styled from "styled-components";
import Container from "./Container";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & input {
    font-size: 1rem;
    padding: 0.2rem;
  }

  & button {
    font-size: 1rem;
    padding: 0.2rem;
    margin: 1rem;
    width: auto;
  }
`;

const UserForm = () => {
  return (
    <Container>
      <Form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="age">Age (years)</label>
        <input type="text" name="age" id="age" />
        <button type="submit">Add User</button>
      </Form>
    </Container>
  );
};

export default UserForm;
