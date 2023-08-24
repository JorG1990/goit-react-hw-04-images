
import { Li } from "./ImageGalleyItem.styled";
import React from "react";
import PropTypes from "prop-types";

const ImageGalleyItem =({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image.largeImageURL);
  };

  return (
    <Li className="gallery-item">
      <img src={ image.webformatURL } alt={ image.tags } onClick={ handleClick } />
    </Li>
  );
};

ImageGalleyItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleyItem;
