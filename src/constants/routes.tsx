import { lazy } from 'react';

const Home = lazy(() => import ('../containers/Home'));
const Podcasts = lazy(() => import('../containers/Podcasts'));
const Resources = lazy(() => import('../containers/Resources'));
const Teams = lazy(() => import('../containers/Teams'));
const Login = lazy(() => import('../containers/Login'));

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
    path: 'login',
    element: <Login />,
  },
];

export default router;
