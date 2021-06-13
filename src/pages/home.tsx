import React from 'react';
import CarBlock, { Props as Car } from '../components/car';
// @ts-ignore
import { View } from 'vcc-ui';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// @ts-ignore
import carsData from '../cars.json';

interface Props {
  cars?: Car[]
}

const Home: any = () => {
  return (
    // <View direction='row'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        visibleSlides={4}
        totalSlides={carsData.length}>
          <Slider>
          {carsData.map((c, i) => {
            return (<Slide index={i}>
              <CarBlock  {...c} />
            </Slide>)
          })}
          </Slider>
      </CarouselProvider>
      

    // </View>
  )
}

export default Home;
