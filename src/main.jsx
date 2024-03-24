import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ManiLayout from './layout/ManiLayout';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Applied from './Pages/Applied';
import Blogs from './Pages/Blogs';
import ErrPages from './Pages/ErrPages';
import JobsDeatils from './Pages/JobsDeatils';

const router = createBrowserRouter([
  {
    path: '/',

    element: <ManiLayout></ManiLayout>,
    errorElement: <ErrPages></ErrPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/Applied',
        element: <Applied></Applied>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/Blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/job/:id',
        element: <JobsDeatils></JobsDeatils>,
        loader: () => fetch('jobs.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
