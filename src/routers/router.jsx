import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';

import MainLayout from '../Layout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
