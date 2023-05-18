import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';

import MainLayout from '../Layout/MainLayout';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

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
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
