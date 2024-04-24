import React, { useState, useEffect } from "react";

import "./style.css";

const ImageComponent = ({ imageUrl = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Function to handle "Esc" key press
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      setIsOpen(false); // Close the popup
    }
  };

  const handleShowDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        height={120}
        width={180}
        src={imageUrl}
        onClick={handleShowDialog}
        onLoad={(e) => {
          setIsImageLoading(false);
        }}
        alt={imageUrl}
      />
      {isImageLoading && (
        <img
          height={100}
          width={200}
          src="https://loading.io/assets/mod/spinner/spin/lg.gif"
        />
      )}
      {isOpen && (
        <dialog
          className="dialog"
          style={{ position: "absolute", zIndex: 2 }}
          open
          onClick={handleShowDialog}
        >
          <img
            className="image"
            src={imageUrl}
            onClick={handleShowDialog}
            alt={imageUrl}
          />
        </dialog>
      )}
      {isOpen && <div className="overlay"></div>}
    </div>
  );
};

export default ImageComponent;
