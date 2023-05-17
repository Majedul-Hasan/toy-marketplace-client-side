import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch('http://localhost:5000'),
    children: [
      {
        path: '/',
        element: <div>HomePage</div>,
      },

      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
