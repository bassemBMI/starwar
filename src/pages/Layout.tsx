import React, { FC, ReactNode } from 'react';
import { Await, Link, Outlet, useLoaderData, useOutletContext } from 'react-router-dom';

import { StarshipType, DataType } from '../contexts/StarshipContext';

interface LayoutProps {
  children?: ReactNode;
}

type ContextType = { loadedData: DataType | null };

const Layout: FC<LayoutProps> = () => {
  const loadedData = useLoaderData() as DataType;
  return (
    <>
      <nav className="bg-white rounded-lg border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900 mb-8">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <div id="mega-menu" className="items-center justify-between hidden w-full text-sm md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link to={'/'} className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className='container'>
          <Outlet context={{ loadedData }} />
          
        </div>
    </>
  );
};

export default Layout;

export function useData() {
  return useOutletContext<ContextType>();
}
