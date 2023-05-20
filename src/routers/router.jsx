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
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import UpdateToy from '../Pages/UpdateToy/UpdateToy';
import SingleBlogPage from '../Pages/SingleBlogPage/SingleBlogPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API}/toys`),
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
        loader: () => fetch(`${import.meta.env.VITE_API}/toys`),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch(`${import.meta.env.VITE_API}/blogs`),
      },
      {
        path: '/blogs/:id',
        element: <SingleBlogPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/blogs/${params.id}`),
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
        path: '/update/profile',
        element: (
          <PrivetRoute>
            <UpdateProfile />
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
        path: '/my-toys/update/:id',
        element: (
          <PrivetRoute>
            <UpdateToy />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/toys/${params.id}`),
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
