import React from 'react';
import CarBlock, { Props as Car } from '../components/car';
// @ts-ignore
import { View } from 'vcc-ui';
// @ts-ignore
import carsData from '../cars.json';

interface Props {
  cars?: Car[]
}

const Home: any = () => {
  return (
    <View direction='row'>
      {carsData.map(c => <CarBlock {...c} />)}

    </View>
  )
}

export default Home;
