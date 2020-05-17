import React from 'react';

export default function Arrow({ left, right }) {
    const srLabel = function srLabelDirection(text) {
        if (left && text) {
            return `${text} previous`;
        }
        if (right && text) {
            return `${text} next`;
        }
    };
    return (
        <button
            className={`arrow ${left ? 'arrow__left' : ''}${
                right ? 'arrow__right' : ''
            }`}>
            <div className="arrow__label" focusable="false" aria-hidden="true">
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
