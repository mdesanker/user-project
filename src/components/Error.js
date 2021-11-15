import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);

  z-index: 10;
`;

const Modal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  padding: 2rem;
  background-color: white;
  border-left: 7px solid red;

  z-index: 100;

  & p span {
    font-weight: 700;
  }
`;

const Error = (props) => {
  return (
    <Overlay>
      <Modal>
        <p>
          <span>Error:</span>
        </p>
      </Modal>
    </Overlay>
  );
};

export default Error;
