
import { Route, Routes } from 'react-router-dom';
import { router } from '../src/routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';
function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2 className="text-amber-900">404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
