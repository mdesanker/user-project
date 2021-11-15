import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & input {
    font-size: 1rem;
    padding: 0.2rem;
  }

  & .field {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
  }
`;

const UserForm = () => {
  return (
    <Container>
      <Form>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="field">
          <label htmlFor="age">Age (years)</label>
          <input type="text" name="age" id="age" />
        </div>
        <Button type="submit">Add User</Button>
      </Form>
    </Container>
  );
};

export default UserForm;
