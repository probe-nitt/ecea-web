import { lazy } from 'react';

const Home = lazy(() => import ('../containers/Home'));
const Podcasts = lazy(() => import('../containers/Podcasts'));
const Resources = lazy(() => import('../containers/Resources'));
const Teams = lazy(() => import('../containers/Teams'));
const Explore = lazy(() => import('../containers/Explore'));

const router = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'explore',
    element: <Explore />,
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
