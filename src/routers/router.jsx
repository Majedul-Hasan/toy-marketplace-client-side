import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import MainLayout from '../Layout/MainLayout';
import Error404 from '../Pages/Error404Page/Error404';
import Register from '../Pages/RegisterPage/Register';
import AllToys from '../Pages/AllToys/AllToys';
import About from '../Pages/About/About';
import Blogs from '../Pages/Blogs/Blogs';
import AddToy from '../Pages/AddToy/AddToy';
import MyToys from '../Pages/MyToys/MyToys';
import Home from '../Pages/Homepage/Home/Home';
import PrivetRoute from './PrivetRoute';
import Spinner from '../components/spinner/Spinner';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    loader: () => fetch('http://localhost:5000'),
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },

      {
        path: '/register',
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: '/all-toys',
        element: <AllToys />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/add-toy',
        element: (
          <PrivetRoute>
            <AddToy />
          </PrivetRoute>
        ),
      },
      {
        path: '/my-toys',
        element: (
          <PrivetRoute>
            <MyToys />
          </PrivetRoute>
        ),
      },
      {
        path: '/spinner',
        element: <Spinner />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default router;
