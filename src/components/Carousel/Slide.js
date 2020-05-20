import React from 'react';
export default function Slide({ imageData, currentIndex, animation }) {
    const baseURL = `/assets/images/`;
    const image = imageData[currentIndex];

    return (
        <div className="slide">
            <div className="slide__counter">
                Viewed {(image.count += 1)} time{image.count > 1 ? 's' : null}
            </div>
            <img src={`${baseURL}${image.name}`} alt={image.alt} />
        </div>
    );
}
