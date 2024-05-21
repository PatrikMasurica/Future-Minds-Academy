import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/homeStyle.css';
import './css/about-us.css';


import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogDetails from './pages/Blog-details';
import ContactUs from './pages/Contact-us';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog-details', element: <BlogDetails /> },
  { path: '/contact-us', element: <ContactUs /> },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
