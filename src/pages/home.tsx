import React from 'react';
import CarBlock, { Props as Car } from '../components/car';

// @ts-ignore
import carsData from '../cars.json';

interface Props {
  cars?: Car[]
}

const Home: React.FC<Props> = () => {
  const [car] = carsData;
  return (
    <CarBlock {...car} />
  );
}

export default Home;
