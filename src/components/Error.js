import styled from "styled-components";
import Button from "./Button";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  z-index: 10;
`;

const Modal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  padding: 2rem 3rem;
  background-color: white;
  border-left: 7px solid #9d0208;

  z-index: 100;

  & p span {
    font-weight: 700;
  }
`;

const Error = (props) => {
  return (
    <Overlay onClick={props.onClear}>
      <Modal>
        <p>
          <span>Error:</span>
          {` ${props.msg}`}
        </p>
        <Button secondary onClick={props.onClear}>
          Close
        </Button>
      </Modal>
    </Overlay>
  );
};

export default Error;
