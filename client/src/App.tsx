

import { router } from '../src/routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
