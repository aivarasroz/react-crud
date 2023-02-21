const EachTeamPageRoot = '/team/'


const routes = {
  HomePage: '/',
  EachTeamPage: {
    path: '/team/:id',
    createLink: (id: string | number) => `${EachTeamPageRoot}${id}`
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
