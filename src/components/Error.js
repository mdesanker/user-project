import styled from "styled-components";
import Button from "./Button";
import ReactDOM from "react-dom";
import React from "react";

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
  position: absolute;
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

const Backdrop = (props) => {
  return <Overlay onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Modal>
      <p>
        <span>Error:</span>
        {` ${props.errorMsg}`}
      </p>
      <Button secondary onClick={props.onClose}>
        Close
      </Button>
    </Modal>
  );
};

const Error = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClear} />,
        document.querySelector("#overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClear} errorMsg={props.msg} />,
        document.querySelector("#modal-root")
      )}
    </React.Fragment>
  );
};

export default Error;
