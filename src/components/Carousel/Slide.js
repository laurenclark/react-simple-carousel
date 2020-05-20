import React from 'react';
import Animate from 'animate.css';
export default function Slide({ imageData, currentIndex, animation }) {
    const baseURL = `/assets/images/`;
    const image = imageData[currentIndex];

    return (
        <div className={`slide animate__animated animate__fast ${animation}`}>
            <div className="slide__counter">
                Viewed {(image.count += 1)} times
            </div>
            <img src={`${baseURL}${image.name}`} alt={image.alt} />
        </div>
    );
}
