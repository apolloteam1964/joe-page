import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  pointer-events: none;
  transition: opacity 0.2s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
    pointer-events: auto;
    opacity: 1;
  `}
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  transform: translate(-50%, -20%);
  transition: transform 0.2s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translate(-50%, -50%);
  `}
`;
