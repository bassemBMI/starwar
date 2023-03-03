import { createBrowserRouter, createRoutesFromElements, defer, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Error from './pages/Error';
import Home from './pages/Home';
import StarshipDetails from './pages/StarshipDetails';
import PilotDetail from './pages/PilotDetail';
import { loadStarshipList } from './contexts/StarshipContext';
import React from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"
        element={<Layout />}
        errorElement={<Error />}
        loader={async () => {
            const starshipList =  await loadStarshipList();
          return defer(starshipList);
          }
        }
        shouldRevalidate={() => false}
        >
        <Route index={true} element={<Home />}/>
        <Route index={false} path=":starship" element={<StarshipDetails />} />
        <Route index={false} path="/pilot/:starship/:pilot" element={<PilotDetail />} />
      </Route>
    </>
  )
);

export default router;