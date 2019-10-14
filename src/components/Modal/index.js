import React from "react";
import { ModalBackground, Modal } from "./styles";

export default ({ isOpen, onClose, ...props }) => (
  <ModalBackground onClick={onClose} isOpen={isOpen}>
    <Modal onClick={e => e.stopPropagation()} isOpen={isOpen} {...props} />
  </ModalBackground>
);
