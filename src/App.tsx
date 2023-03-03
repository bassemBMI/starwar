import { RouterProvider } from 'react-router-dom';

import router from './router';
import './index.css';

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <div style={{position: 'absolute'}}>Loading data...</div>
      <div style={{ position: 'absolute', top: '0px', zIndex: 2, backgroundColor: 'white' }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
