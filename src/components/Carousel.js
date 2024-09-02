import React, { useState } from 'react';
import '../Carousel.css';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <h2>Projects</h2>
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      {images[activeIndex].link ? (
        <a href={images[activeIndex].link} target="_blank" rel="noopener noreferrer">
          <img
            src={images[activeIndex].src}
            alt={`Slide ${activeIndex}`}
            className="carousel__img"
          />
        </a>
      ) : (
        <img
          src={images[activeIndex].src}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
      )}
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
