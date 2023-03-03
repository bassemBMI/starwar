import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { emptyStarship, PilotType  } from '../contexts/StarshipContext';
import { useData } from './Layout';
import Pilot from './Pilot';

const StarshipDetails: FC = () => {
  const { loadedData } = useData();
  const { starship } = useParams();
  const [starshipDetails, setStarshipDetails] = React.useState(emptyStarship);
  React.useEffect(() => {
    if (loadedData && starship) {
      const getStarship = loadedData.results.find((s) => s.name === starship);
      if (getStarship) {
        setStarshipDetails(getStarship);
      }
    }
  }, [])

  return (
    <div className="flex justify-center max-w-lg">
      <div className="place-self-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {starshipDetails.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul className='text-sm'>
              <li>Cargo capacity: {starshipDetails.cargo_capacity}</li>
              <li>consumables: {starshipDetails.consumables}</li>
              <li>Cost in credits: {starshipDetails.cost_in_credits}</li>
              <li>Length: {starshipDetails.length}</li>
            </ul>
        </p>
        <p>
            <div className='text-md'>Pilots:</div>
            <ul>
              {starshipDetails.pilots.map((p, i) => <Pilot pilot={p as PilotType} starship={starship as string} key={i} />)}
            </ul>
        </p>
        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back To List
        </Link>
      </div>
    </div>
  );
};

export default StarshipDetails;
