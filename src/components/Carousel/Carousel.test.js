import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel';
import Arrow from './Arrow';
import Slide from './Slide';

test('renders carousel', () => {
    render(<Carousel />);
    const carouselElement = document.querySelector('.carousel');
    expect(carouselElement).toBeInTheDocument();
});
