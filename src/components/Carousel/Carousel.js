import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import imageData from './slide-images';
import Slide from './Slide';
import Arrow from './Arrow';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState('');
    const imagesLength = imageData.length - 1;
    const handlers = useSwipeable({
        onSwipedLeft: () => nextHandler(),
        onSwipedRight: () => prevHandler(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const prevHandler = () => {
        setAnimation('animate__slideInRight');
        const index = currentIndex === 0 ? imagesLength : currentIndex - 1;
        setCurrentIndex(index);
        setTimeout(() => {
            setAnimation('');
        }, 200);
    };

    const nextHandler = () => {
        setAnimation('animate__slideInLeft');
        const index = currentIndex === imagesLength ? 0 : currentIndex + 1;
        setCurrentIndex(index);
        setTimeout(() => {
            setAnimation('');
        }, 200);
    };

    return (
        <div className="carousel" {...handlers}>
            <div className="carousel__track">
                <Slide
                    imageData={imageData}
                    currentIndex={currentIndex}
                    animation={animation}
                />
            </div>
            <div className="controls">
                <Arrow left="true" handleClick={prevHandler} />
                <Arrow right="true" handleClick={nextHandler} />
            </div>
        </div>
    );
}

export default Carousel;
