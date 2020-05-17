import React, { useState, useEffect } from 'react';
import slideImages from './slide-images';

export default function Slide({ sourcePath, isActive, altText }) {
    const baseURL = `/assets/images/`;
    const [viewed, setViewed] = useState(0);

    useEffect(() => {
        if (isActive && sourcePath === sourcePath) {
            setViewed(viewed + 1);
        }
        return () => {};
    }, []);

    return (
        <div className="slide">
            <div className="slide__view-counter">Viewed {viewed}</div>
            <img src={`${baseURL}${sourcePath}`} alt={altText} />
        </div>
    );
}
