const Home = () => <h1>Home</h1>;
const Podcasts = () => <h1>Podcasts</h1>;
const Resources = () => <h1>Resources</h1>;
const Teams = () => <h1>Teams</h1>;

const router = [
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'teams',
    element: <Teams />,
  },
  {
    path: 'resources',
    element: <Resources />,
  },
  {
    path: 'podcasts',
    element: <Podcasts />,
  },
];

export default router;
