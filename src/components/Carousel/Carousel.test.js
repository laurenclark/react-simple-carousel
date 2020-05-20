import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel';
import Arrow from './Arrow';
import Slide from './Slide';

describe('Carousel', () => {
    test('should not crash', () => {
        expect(() => render(<Carousel />).container.toThrow());
    });

    test('should render carousel', () => {
        render(<Carousel />);
        const carouselElement = document.querySelector('.carousel');
        expect(carouselElement).toBeInTheDocument();
    });
});

describe('Arrow', () => {
    test('should not crash', () => {
        expect(() => render(<Arrow />).container.toThrow());
    });
});

describe('Slide', () => {
    test('should not crash', () => {
        expect(() => render(<Slide />).container.toThrow());
    });
});
