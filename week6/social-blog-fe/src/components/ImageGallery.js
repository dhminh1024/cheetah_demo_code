import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function ImageGallery({ imagesGallery }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="d-flex justify-content-center">
      {imagesGallery.length === 1 ? (
        <img className="w-50" src={imagesGallery[0]} alt="images content" />
      ) : (
        <>
          <Gallery
            photos={imagesGallery.map((imageUrl, i) => ({
              key: i + "",
              src: imageUrl,
              width: 4,
              height: 3,
            }))}
            onClick={openLightbox}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={imagesGallery.map((imageUrl, i) => ({
                    key: i + "",
                    src: imageUrl,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      )}
    </div>
  );
}

export default ImageGallery;
