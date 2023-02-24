import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import routes from './routes';
import EachTeamPage from 'pages/each-team-page/index';
import TeamFormPage from 'pages/team-form-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.EachTeamPage.path,
        element: <EachTeamPage />,
      },
      {
        path: routes.TeamFormPage,
        element: <TeamFormPage />,
      },
      {
        path: routes.UpdateTeamPage.path,
        element: <TeamFormPage />,
      },
    ],
  },
]);

export default router;
