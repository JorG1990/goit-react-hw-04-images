
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImageGalleyItem from "../ImageGalery/ImageGallery";
import { Li } from "./ImageGallery.styled";

function ImageGalery({ images, onImageClick }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      onImageClick(selectedImage);
    }
  }, [selectedImage, onImageClick]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <ul className="gallery">
      { images && images.map((image) => (
        <Li className="gallery-item" key={image,id}>
          <ImageGalleyItem image={ image } onImageClick={ handleImageClick } />
        </Li>
      ))}
    </ul>
  );
}

ImageGalery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

expor default ImageGalery;
