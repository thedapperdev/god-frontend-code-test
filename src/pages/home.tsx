import React from 'react';
import { useOnWindowResize } from 'rooks';
import CarBlock, { Props as Car } from '../components/car';
// @ts-ignore
import { Slider, Slide } from 'pure-react-carousel';
import { Provider as CarouselProvider } from '../components/Carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
// @ts-ignore
import carsData from '../cars.json';

interface Props {
  cars?: Car[]
}

const RESPONSIVE_CAROUSEL = {
  medium: {
    step: 1,
    visibleSlides: 1,
    dots: true,
  },
  large: {
    step: 4,
    visibleSlides: 4,
    dots: false,
  },
}

const Home: any = () => {
  return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        responsive={RESPONSIVE_CAROUSEL}
        totalSlides={carsData.length}>
          <Slider>
          {carsData.map((c, i) => {
            return (<Slide index={i} key={`${c.id}-${i}`}>
              <CarBlock  {...c} />
            </Slide>)
          })}
          </Slider>
      </CarouselProvider>
  )
}

export default Home;
