import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import imageData from './slide-images';
import Slide from './Slide';
import Arrow from './Arrow';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState();
    const imagesLength = imageData.length - 1;
    const handlers = useSwipeable({
        onSwipedLeft: () => nextHandler(),
        onSwipedRight: () => prevHandler(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const prevHandler = () => {
        const index = currentIndex === 0 ? imagesLength : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextHandler = () => {
        const index = currentIndex === imagesLength ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className="carousel" {...handlers}>
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
