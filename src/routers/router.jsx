import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';

import MainLayout from '../Layout/MainLayout';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import Error404 from '../Pages/Error404Page/Error404';
import Rough from '../Pages/RegisterPage/Register';
import Register from '../Pages/RegisterPage/Register';

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
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
