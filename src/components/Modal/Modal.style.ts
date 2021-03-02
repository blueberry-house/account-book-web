import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
`;

export const Modal = styled.div`
  min-width: 200px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 0 1px #eee;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid #eee;
`;

export const ModalBody = styled.div`
  padding: 30px;
`;

export const ModalButtons = styled.div`
  display: flex;
  border-top: 1px solid #eee;
`;

export const ModalButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
