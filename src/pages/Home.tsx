import React from 'react';

import Starship from './Starship';
import { StarshipType } from '../contexts/StarshipContext';

import { useData } from './Layout';

const Home = () => {
  const { loadedData } = useData();
  const starshipList = loadedData ? loadedData.results as StarshipType[] : [];

  return (
    <div className='p-4'>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        { starshipList.map((starship: StarshipType) => <Starship startship={starship} key={starship.name} />)}
      </div>
    </div>
  )
}

export default Home;
