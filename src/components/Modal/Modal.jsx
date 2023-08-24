
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { DivModalStyle, DivOverlay } from "./Modal.styled";

function Modal({ imageUrl, closeModal }) {
  useEffect(() => {
    const hanleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", hanleKeyDown);
    return () => {
      window.removeEventListener("keydown", hanleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <DivOverlay onClick={ handleBackdropClick }>
      <DivModalStyle>
        <img src={ imageUrl } alt="" />
      </DivModalStyle>
    </DivOverlay>
  );
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
