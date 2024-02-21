import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from './Slider';

describe('Slider component', () => {
  let images;

  beforeEach(() => {
    images = [
      {
        src: 'https://via.placeholder.com/800x300/FF0000/FFFFFF',
        alt: 'Imagen 1',
        title: 'Título de la imagen 1',
        description: 'Descripción de la imagen 1',
      },
      {
        src: 'https://via.placeholder.com/800x300/00FF00/FFFFFF',
        alt: 'Imagen 2',
        title: 'Título de la imagen 2',
        description: 'Descripción de la imagen 2',
      },
      {
        src: 'https://via.placeholder.com/800x300/0000FF/FFFFFF',
        alt: 'Imagen 3',
        title: 'Título de la imagen 3',
        description: 'Descripción de la imagen 3',
      },
    ];
  });

  test('renders without crashing', () => {
    render(<Slider images={images} />);
  });

  test('displays the first image on initial render', () => {
    const { getByAltText } = render(<Slider images={images} />);
    const firstImage = getByAltText('Imagen 1');
    expect(firstImage).toBeInTheDocument();
  });

  test('changes the displayed image when the "Siguiente" button is clicked', () => {
    const { getByText, getByAltText } = render(<Slider images={images} />);
    const nextButton = getByText('Siguiente');
    fireEvent.click(nextButton);
    const secondImage = getByAltText('Imagen 2');
    expect(secondImage).toBeInTheDocument();
  });

  test('changes the displayed image when the "Anterior" button is clicked', () => {
    const { getByText, getByAltText } = render(<Slider images={images} />);
    const prevButton = getByText('Anterior');
    fireEvent.click(prevButton);
    const lastImage = getByAltText('Imagen 3');
    expect(lastImage).toBeInTheDocument();
  });

  test('displays images with the correct src', () => {
    const { getByAltText } = render(<Slider images={images} />);
    images.forEach((image) => {
      const displayedImage = getByAltText(image.alt);
      expect(displayedImage).toHaveAttribute('src', image.src);
    });
  });
});
