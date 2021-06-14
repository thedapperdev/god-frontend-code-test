import React, { useState } from 'react';
import CarBlock, { ICar } from '../components/car';
// @ts-ignore
import { Slider, Slide } from 'pure-react-carousel';
import { Provider as CarouselProvider } from '../components/Carousel';
import CheckboxGroup, { ICheckboxGroupItem } from '../components/checkbox-group';

import 'pure-react-carousel/dist/react-carousel.es.css';
// @ts-ignore
import carsData from '../cars.json';
import { uniqBy } from 'lodash';
// @ts-ignore
import { View, Spacer } from 'vcc-ui';

const RESPONSIVE_CAROUSEL = {
  small: {
    step: 1,
    visibleSlides: 1,
    dots: true,
    naturalSlideWidth: 90,
    naturalSlideHeight: 100,    
  },
  medium: {
    step: 1,
    visibleSlides: 1,
    dots: true,
    naturalSlideWidth: 100,
    naturalSlideHeight: 100,
  },
  large: {
    step: 4,
    visibleSlides: 4,
    dots: false,
    naturalSlideWidth: 100,
    naturalSlideHeight: 115,
  },
}



const Home: React.FC = () => {
  const bodyTypes: ICheckboxGroupItem[] = uniqBy(
    carsData.map(c => ({
      name: c.bodyType,
      checked: true,
    })),
    'name',
  );

  const [viewableCars, setViewableCars] = useState(carsData);

  const setFilter = (checkboxState: ICheckboxGroupItem[]) => {
    const filteredTypes = checkboxState
      .filter((cbs: ICheckboxGroupItem) => cbs.checked)
      .map((c: ICheckboxGroupItem) => c.name);
    
    setViewableCars(
      carsData.filter((car: ICar) => filteredTypes.includes(car.bodyType))
    )
  }

  return (
      <View>
        <Spacer size={3} />
        <View direction='row' justifyContent='center'>
          <CheckboxGroup items={bodyTypes} onChange={setFilter} />
        </View>
        <Spacer size={3} />
        <CarouselProvider
        responsive={RESPONSIVE_CAROUSEL}
        totalSlides={viewableCars.length}>
          <Slider>
            {viewableCars.map((c, i) => {
              return (
                <Slide index={i} key={`${c.id}-${i}`}>
                  <CarBlock  {...c} />
                </Slide>
              )
            })}
          </Slider>
        </CarouselProvider>
      </View>
  )
}

export default Home;
