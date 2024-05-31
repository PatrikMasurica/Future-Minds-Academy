import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Spring from './pages/Spring';
import Summer from './pages/Summer';
import Fall from './pages/Fall';
import Winter from './pages/Winter';
import Allseasons from './pages/Allseasons';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  { path: '/', element: <Spring /> },
  { path: '/summer', element: <Summer /> },
  { path: '/fall', element: <Fall /> },
  { path: '/winter', element: <Winter /> },
  { path: '/allseasons', element: <Allseasons /> },
  { path: '*', element: <ErrorPage /> }

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
