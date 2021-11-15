import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: ${(props) => (props.secondary ? "1rem 0 0" : "1rem 0")};
  background-color: ${(props) => (props.secondary ? "white" : "#9b2226")};
  border: 2px solid #9b2226;
  border-radius: 5px;
  color: ${(props) => (props.secondary ? "#9b2226" : "white")};
  transition: 100ms all;

  &:hover {
    color: ${(props) => (props.secondary ? "white" : "#9b2226")};
    background-color: ${(props) => (props.secondary ? "#9b2226" : "white")};
  }
`;

export default Button;
