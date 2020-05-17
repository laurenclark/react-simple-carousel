import React, { useState } from 'react';
import ImageData from './slide-images';
import Slide from './Slide';
import Arrow from './Arrow';

function Carousel() {
    // const [slideIndex, setSlideIndex] = useState(0);
    const slideImages = ImageData;
    const [isActive, setIsActive] = useState(false);

    // const imagesLength = slideImages.length;

    return (
        <div className="carousel">
            <div className="carousel__track-container">
                <div className="carousel__track">
                    {slideImages.map((slideData) => (
                        <Slide
                            key={slideData.id}
                            sourcePath={slideData.name}
                            altText={slideData.alt}
                            isActive={() => isActive(slideData.name)}
                        />
                    ))}
                </div>
            </div>
            <div className="controls">
                <Arrow left="true" />
                <Arrow right="true" />
            </div>
        </div>
    );
}

export default Carousel;
