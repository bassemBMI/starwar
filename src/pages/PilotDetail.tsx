import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PilotType } from '../contexts/StarshipContext';
import { useData } from './Layout';

const PilotDetail: FC = () => {
    const { loadedData } = useData();
    const { pilot, starship } = useParams();
    const [pilotDetails, setPilotDetails] = React.useState<PilotType | null>(null);
  
    React.useEffect(() => {
        if (loadedData && pilot) {
            const findPilot = loadedData.pilots.find((s) => s.name === pilot);
            if (findPilot) {
                setPilotDetails(findPilot as PilotType);
            }
        }
    }, [])
  return (
    <div className="flex justify-center max-w-lg">
      <div className="place-self-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pilotDetails?.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul>
              <li>Year of Birth: {pilotDetails?.birth_year}</li>
              <li>Gender: {pilotDetails?.gender}</li>
              <li>height: {pilotDetails?.height}</li>
              <li>Hair Color: {pilotDetails?.hair_color}</li>
              <li>Eye Color: {pilotDetails?.eye_color}</li>
            </ul>
        </p>
        <Link to={`/${starship}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back To Starship
        </Link>
      </div>
    </div>
  );
};

export default PilotDetail;
