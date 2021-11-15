import Container from "./Container";
import Field from "./Field";

const Output = (props) => {
  const content = props.users.map((user) => {
    return <Field id={user.id}>{`${user.name} (${user.age} years old)`}</Field>;
  });

  return <Container>{content}</Container>;
};

export default Output;
