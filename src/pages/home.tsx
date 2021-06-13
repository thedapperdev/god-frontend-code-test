import React, { useEffect, useState } from 'react';
import { useOnWindowResize } from 'rooks';
import CarBlock, { Props as Car } from '../components/car';
// @ts-ignore
import { Slider, Slide } from 'pure-react-carousel';
import { Provider as CarouselProvider } from '../components/Carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
// @ts-ignore
import carsData from '../cars.json';
import { uniqBy } from 'lodash';
// @ts-ignore
import { Checkbox, View, Spacer } from 'vcc-ui';

interface Props {
  cars?: Car[]
}

const RESPONSIVE_CAROUSEL = {
  small: {
    step: 1,
    visibleSlides: 1,
    dots: true,
    naturalSlideWidth: 80,
    naturalSlideHeight: 80,    
  },
  medium: {
    step: 1,
    visibleSlides: 1,
    dots: true,
    naturalSlideWidth: 100,
    naturalSlideHeight: 95,
  },
  large: {
    step: 4,
    visibleSlides: 4,
    dots: false,
    naturalSlideWidth: 100,
    naturalSlideHeight: 115,
  },
}

const FilterCheckboxes = ({ items, onChange, ...props }: { items: { name: string, checked: boolean}[], onChange: Function }) => {

  const [
    selected,
    setSelected,
  ] = useState<{ name: string, checked: boolean}[]>(
    items,
  );
  


  const handleChange = (checkbox: any) => {
    const newState = [
      ...selected,
    ];
    const recordNo: number = selected.findIndex(
      (bodyTypes: any) => bodyTypes.name === checkbox.name,
    );
    if (recordNo !== -1) {
      newState[recordNo] = checkbox;
      setSelected(newState);
      onChange(newState);
    }
  }


  return <View direction='row'>
      {selected.map(
        (item, i: number) => {
          return (
            <>
              <Spacer key={`spacer-${i}`} />
              <Checkbox
                label={item.name}
                key={`${i}-car`}
                value={item.name}
                checked={item.checked}
                onChange={() => handleChange({...item, checked: !item.checked})} />
              </>
            )
        },
      )}
      </View>;
}

const Home: any = () => {
  const bodyTypes: any[] = uniqBy(
    carsData.map(c => ({
      name: c.bodyType,
      checked: true,
    })),
    'name',
  );

  const [viewableCars, setViewableCars] = useState(carsData);

  const setFilter = (checkboxState: any) => {
    const filteredTypes = checkboxState
      .filter((cbs: any) => cbs.checked)
      .map((c: any) => c.name);
    
    setViewableCars(
      carsData.filter((car: Car) => filteredTypes.includes(car.bodyType))
    )
  }

  return (
      <View>
        <FilterCheckboxes items={bodyTypes} onChange={setFilter} />
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
