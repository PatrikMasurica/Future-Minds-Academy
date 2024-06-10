import './App.css'
import Counter from './views/Counter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ToggleVisibility from './views/ToggleVisibility';
import InputField from './views/InputField';



const router = createBrowserRouter([
  { path: '/', element: <Counter /> },
  { path: '/toggle-visibility', element: <ToggleVisibility /> },
  { path: '/input-field', element: <InputField /> }
]);

function App() {

  return (
    <>
      <h1>Hooks</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
