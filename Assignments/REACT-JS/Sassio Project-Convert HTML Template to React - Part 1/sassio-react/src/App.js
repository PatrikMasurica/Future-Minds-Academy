import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './assets/css/fma-general.css';
import './assets/css/fma-responsive.css';
import './assets/css/style.css';
import './assets/css/style-responsive.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ContacUs from './pages/ContactUs';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contact', element: <ContacUs /> },
  { path: '/blog', element: <Blog /> }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
