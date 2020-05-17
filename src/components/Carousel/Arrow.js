import React from 'react';

export default function Arrow({ left, right }) {
    return (
        <div
            className={`arrow ${left ? 'arrow__left' : ''}${
                right ? 'arrow__right' : ''
            }`}></div>
    );
}
