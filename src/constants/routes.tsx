import { lazy } from 'react';

const Home = lazy(() => import ('../containers/Home'));
const Podcasts = lazy(() => import('../containers/Podcasts'));
const Resources = lazy(() => import('../containers/Resources'));
const Teams = lazy(() => import('../containers/Teams'));
const Blogs = lazy(() => import('../containers/Blogs'));

const router = [
  {
    path: '',
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
  {
    path: 'blogs',
    element: <Blogs />,
  },
];

export default router;
