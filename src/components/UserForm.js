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

const UserForm = (props) => {
  return (
    <Container>
      <Form onSubmit={props.onFormSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="name"
            id="name"
            value={props.user.name}
            onChange={props.onUpdateUser}
          />
        </div>
        <div className="field">
          <label htmlFor="age">Age (years)</label>
          <input
            type="text"
            name="age"
            id="age"
            value={props.user.age}
            onChange={props.onUpdateUser}
          />
        </div>
        <Button type="submit">Add User</Button>
      </Form>
    </Container>
  );
};

export default UserForm;
