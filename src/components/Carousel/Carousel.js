import React, { useState } from 'react';
import imageData from './slide-images';
import Slide from './Slide';
import Arrow from './Arrow';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesLength = imageData.length - 1;
    const prevHandler = () => {
        const index = currentIndex === 0 ? imagesLength : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextHandler = () => {
        const index = currentIndex === imagesLength ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel__track">
                <Slide imageData={imageData} currentIndex={currentIndex} />
            </div>
            <div className="controls">
                <Arrow left="true" handleClick={prevHandler} />
                <Arrow right="true" handleClick={nextHandler} />
            </div>
        </div>
    );
}

export default Carousel;
