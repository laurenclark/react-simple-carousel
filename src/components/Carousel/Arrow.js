import React from 'react';
import PropTypes from 'prop-types';
export default function Arrow({ left, right, handleClick }) {
    const srLabel = function srLabelDirection(text) {
        if (left && text) {
            return `${text} previous slide`;
        } else if (right && text) {
            return `${text} next slide`;
        } else {
            return `View adjacent slide`;
        }
    };
    return (
        <button
            onClick={handleClick}
            focusable="false"
            aria-hidden="true"
            tabIndex="-1"
            className={`arrow ${left ? 'arrow__left' : ''}${
                right ? 'arrow__right' : ''
            }`}>
            <div className="arrow__label">
                <span className="sr-only">{srLabel('View')}</span>
                <svg
                    className="arrow__inner"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
            </div>
        </button>
    );
}

Arrow.propTypes = {
    handleClick: PropTypes.func,
    left: PropTypes.string,
    right: PropTypes.string
};
