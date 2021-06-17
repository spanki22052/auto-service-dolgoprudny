import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import styled from 'styled-components';

const BigWhiteLetters = styled.h1`
  font-size: 2em;
  color: white;
  text-align: center;
`;

const CarouselElement = () => {
  const mainGlide = new Glide('.main__glide').mount(); // default options
  useEffect(() => {
    return () => mainGlide.destroy();
  }, [mainGlide]);

  return (
    <div className="main__glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <BigWhiteLetters>Hello</BigWhiteLetters>
          </li>
          <li className="glide__slide">
            <BigWhiteLetters>Hello</BigWhiteLetters>
          </li>
          <li className="glide__slide">
            <BigWhiteLetters>Hello</BigWhiteLetters>
          </li>
          <li className="glide__slide">
            <BigWhiteLetters>Hello</BigWhiteLetters>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselElement;
