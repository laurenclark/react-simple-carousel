import React, { useState, useEffect } from 'react';

export default function Slide({ imageData, currentIndex }) {
    const baseURL = `/assets/images/`;
    const image = imageData[currentIndex];

    return (
        <div className="slide">
            <div className="slide__view-counter">
                Viewed {(image.count += 1)} times
            </div>
            <img src={`${baseURL}${image.name}`} alt={image.alt} />
        </div>
    );
}
