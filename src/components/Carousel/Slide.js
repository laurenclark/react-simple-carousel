import React from 'react';
import PropTypes from 'prop-types';

export default function Slide({ imageData, currentIndex }) {
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

Slide.propTypes = {
    imageData: PropTypes.arrayOf(PropTypes.object),
    currentIndex: PropTypes.number
};
