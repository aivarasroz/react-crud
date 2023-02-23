const EachTeamPageRoot = '/Team/';
const updateTeamPageRoot = '/update-team/';

const staticRoutes = {
  HomePage: '/',
  TeamFormPage: '/create-team',
} as const;

const dynamicRoutes = {
  EachTeamPage: {
    path: `${EachTeamPageRoot}:id`,
    createLink: (id: string | number) => `${EachTeamPageRoot}${id}`,
  },
  UpdateTeamPage: {
    path: `${updateTeamPageRoot}:id`,
    createLink: (id: string | number) => `${updateTeamPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;