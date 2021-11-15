import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  background-color: #9b2226;
  border: 2px solid #9b2226;
  border-radius: 5px;
  color: white;
  transition: 100ms all;

  &:hover {
    color: #9b2226;
    background-color: white;
  }
`;

export default Button;
