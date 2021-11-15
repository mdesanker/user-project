import Container from "./Container";
import Field from "./Field";

const Output = (props) => {
  const content = props.users.map((user) => {
    return (
      <Field
        key={user.id}
        id={user.id}
        onClick={props.onRemoveUser}
      >{`${user.name} (${user.age} years old)`}</Field>
    );
  });

  return <Container>{content}</Container>;
};

export default Output;
