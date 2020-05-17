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
            <div style={{ overflowX: 'hidden' }}>
                <div className="carousel__inner">
                    {slideImages.map((slideData) => (
                        <Slide
                            key={slideData.id}
                            sourcePath={slideData.name}
                            altText={slideData.alt}
                            isActive={() => isActive(slideData.name)}
                        />
                    ))}
                    <div className="controls">
                        <Arrow left="true" />
                        <Arrow right="true" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
