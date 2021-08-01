import React, { useState, Suspense, useRef, useEffect, createRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import imageData from './slide-images';
import Slide from './Slide';
import Arrow from './Arrow';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewed, setViewed] = useState([]);
    const imagesLength = imageData.length - 1;
    const handlers = useSwipeable({
        onSwipedLeft: () => nextHandler(),
        onSwipedRight: () => prevHandler(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    const elementsRef = useRef(imageData.map(() => createRef()));

    useEffect(() => {
        const nextViewed = elementsRef.current.map(
            (ref) => (ref.current = ref.current + 1)
        );
        setViewed(nextViewed);
    }, []);

    const prevHandler = () => {
        const index = currentIndex === 0 ? imagesLength : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextHandler = () => {
        const index = currentIndex === imagesLength ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const loadStyle = {
        color: 'white',
        fontSize: '2rem'
    };

    return (
        <div className="carousel" {...handlers}>
            <Suspense fallback={<div style={loadStyle}>Loading...</div>}>
                <div
                    className="carousel__track"
                    ref={elementsRef.current[currentIndex]}>
                    <div className="slide__counter">
                        Viewed {viewed} time
                        {/* {renderCount > 1 ? 's' : null} */}
                    </div>
                    <Slide imageData={imageData} currentIndex={currentIndex} />
                </div>
                <div className="controls">
                    <Arrow left="true" handleClick={prevHandler} />
                    <Arrow right="true" handleClick={nextHandler} />
                </div>
            </Suspense>
        </div>
    );
}

export default Carousel;
