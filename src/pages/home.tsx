import React from 'react';
import CarBlock, { Props as Car } from '../components/car';

// @ts-ignore
import carsData from '../cars.json';

interface Props {
  cars?: Car[]
}

const Home: any = () => {
  return carsData.map(c => <CarBlock {...c} />)
}

export default Home;
