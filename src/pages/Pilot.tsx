import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PilotType } from '../contexts/StarshipContext';

interface PilotProps {
    pilot: PilotType;
    starship: string;
}

const Pilot: FC<PilotProps> = ({ pilot, starship }) => {
    return (
        <Link to={`/pilot/${starship}/${pilot.name}`} >
            <div className='dark:text-white dark:bg-slate-800 p-4 rounded-lg' >
                <h2 className='text-lg'>{pilot.name}</h2>
            </div>
        </Link>
    );
};

export default Pilot;
