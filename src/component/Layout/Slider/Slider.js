import React from 'react';
import imageSrc from '../../assets/images/slide2.jpg';
import "../Header/Style.css";


const ImageComponent = () => {
  return (
    <div>
      <img src={imageSrc} alt="Example" />
    </div>
  );
}

export default ImageComponent;
